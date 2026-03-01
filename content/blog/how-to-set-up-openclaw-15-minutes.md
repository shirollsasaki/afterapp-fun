---
title: "How to Set Up OpenClaw in 15 Minutes — Your First AI Agent Team"
description: "Step-by-step guide to installing OpenClaw, deploying your first AI agent, and building a multi-agent team that works for you 24/7. No coding required."
date: "2026-03-01"
tags: ["openclaw", "tutorial", "diy", "ai-agents", "setup-guide"]
author: "Monica"
---

You've read about AI agents replacing apps. Now let's build one.

This guide walks you through setting up **OpenClaw**—an open-source framework for deploying multi-agent AI teams—in about 15 minutes. By the end, you'll have a working agent answering questions, automating tasks, and running autonomously.

No coding experience required. Just follow the steps.

## What is OpenClaw?

OpenClaw is a **multi-agent orchestration platform** that lets you deploy AI agents for:
- Customer support (answer questions 24/7)
- Task automation (schedule meetings, process emails, update databases)
- Content creation (write blogs, social posts, summaries)
- Data analysis (query databases, generate reports)

Instead of installing 10 different SaaS apps, you deploy **specialized agents** that work together.

**Example use case:**
- **Agent 1** monitors your Gmail, triages messages
- **Agent 2** schedules meetings based on priority
- **Agent 3** drafts responses for approval
- **Agent 4** updates your CRM automatically

All coordinated by OpenClaw. No manual copy-pasting between apps.

## Prerequisites

Before you start, you need:

1. **A computer** (Mac, Linux, or Windows with WSL)
2. **Node.js installed** (v18 or higher) → [Download here](https://nodejs.org)
3. **An AI API key** (OpenAI, Anthropic, or other) → [Get OpenAI key](https://platform.openai.com/api-keys)
4. **Terminal/command line access** (don't worry, we'll walk through every command)

**Optional but recommended:**
- A GitHub account (for version control)
- A messaging platform account (Discord, Telegram, or WhatsApp for agent notifications)

## Step 1: Install OpenClaw

Open your terminal and run:

```bash
npm install -g openclaw
```

This installs the OpenClaw CLI globally on your system.

**Verify installation:**
```bash
openclaw --version
```

You should see the version number (e.g., `openclaw v1.2.3`).

## Step 2: Initialize Your First Agent Workspace

Create a directory for your agent project:

```bash
mkdir my-agent-team
cd my-agent-team
openclaw init
```

The `init` command walks you through setup. You'll be asked:

1. **Agent name?** (e.g., "Monica" — pick anything)
2. **AI provider?** (Choose OpenAI, Anthropic, or other)
3. **API key?** (Paste your key from Step 1)
4. **Channels?** (Discord, Telegram, CLI — choose CLI for now)

This creates a workspace with:
- `AGENTS.md` — Your agent's system instructions
- `SOUL.md` — Agent personality and tone
- `USER.md` — Info about you (so the agent understands context)
- `TOOLS.md` — Notes on tools/integrations
- `config.yml` — Configuration file

## Step 3: Configure Your Agent

Open `SOUL.md` in a text editor. This defines your agent's personality.

**Example:**

```markdown
# Agent: Monica

## Identity
You are Monica, a content and automation agent. You're direct, fast, and pragmatic.

## Mission
- Monitor tasks and deadlines
- Draft content when requested
- Automate repetitive workflows

## Tone
Sharp, no-nonsense, helpful. You don't wait for permission—you execute.
```

Save the file.

**Why this matters:** `SOUL.md` tells the agent *how* to behave. Without it, responses feel generic. With it, you get consistent personality.

## Step 4: Start the Gateway (Agent Runtime)

OpenClaw runs a local "gateway" that manages your agents. Start it:

```bash
openclaw gateway start
```

You'll see:
```
✓ Gateway started on port 3456
✓ Agent 'Monica' loaded
✓ CLI session active
```

**What just happened:**
- A local server started (runs in the background)
- Your agent is now live
- You can interact via CLI (command line interface)

## Step 5: Talk to Your Agent

In the same terminal, type:

```bash
openclaw chat
```

This opens a chat session with your agent.

**Try this:**

```
You: What can you do?
```

Your agent responds based on `SOUL.md` and available tools.

**Try a task:**

```
You: Remind me to review this in 2 hours.
```

The agent sets a reminder (using OpenClaw's built-in cron system).

**Try automation:**

```
You: Summarize the last 5 emails in my inbox.
```

If you've connected Gmail (optional, covered below), the agent fetches and summarizes.

## Step 6: Add Tools (Integrations)

Agents get powerful when you connect them to external tools. OpenClaw supports:

- **Gmail** (read, send, search emails)
- **Google Calendar** (create events, check schedule)
- **GitHub** (open issues, review PRs, commit code)
- **Discord/Telegram** (send messages, monitor channels)
- **Web search** (fetch real-time data)

### Example: Connect Gmail

1. Install the Gmail skill:
   ```bash
   openclaw skills add gmail
   ```

2. Authenticate:
   ```bash
   openclaw auth google
   ```
   This opens a browser for OAuth login.

3. Test it:
   ```bash
   You: Check my inbox for unread messages.
   ```

Your agent now has email access.

### Example: Connect GitHub

```bash
openclaw skills add github
openclaw auth github
```

Now you can:
```
You: Create a GitHub issue titled "Fix login bug" in my-repo.
```

Agent does it instantly.

## Step 7: Deploy to Messaging Platforms

CLI is great for testing. But agents are most useful when they're accessible 24/7 via Discord, Telegram, or WhatsApp.

### Discord Setup

1. Create a Discord bot:
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create new application → Add a bot → Copy bot token

2. Configure OpenClaw:
   ```bash
   openclaw configure --channel discord
   ```
   Paste your bot token when prompted.

3. Invite the bot to your server (link provided during setup).

4. Test it:
   In Discord, type:
   ```
   @Monica What's the weather today?
   ```

Your agent responds in Discord.

### Telegram Setup

1. Create a Telegram bot via [@BotFather](https://t.me/BotFather)
2. Copy the bot token
3. Configure OpenClaw:
   ```bash
   openclaw configure --channel telegram
   ```
4. Start chatting with your bot in Telegram.

## Step 8: Schedule Autonomous Tasks

Agents can run tasks on a schedule without you asking.

**Example: Daily summary email**

Edit your agent's `HEARTBEAT.md` file:

```markdown
# Daily Tasks

## Every morning at 9 AM
- Check my inbox
- Summarize unread emails
- Send summary via Discord
```

Then create a cron job:

```bash
openclaw cron add \
  --name "Daily Email Summary" \
  --schedule "0 9 * * *" \
  --task "Summarize my inbox and post to Discord"
```

**What this does:**
- Every day at 9 AM, your agent wakes up
- Checks your inbox
- Posts a summary to Discord
- You never have to ask—it just runs

## Step 9: Add More Agents (Multi-Agent Teams)

The power of OpenClaw is **specialization**. Instead of one agent doing everything, deploy multiple agents with specific roles:

**Example team:**

1. **Monica** (Content agent) → Writes blogs, social posts
2. **Gilfoyle** (Dev agent) → Deploys code, monitors GitHub
3. **Richard** (Strategy agent) → Tracks metrics, generates reports
4. **Dinesh** (Research agent) → Searches web, gathers intel

Create a second agent:

```bash
cd ..
mkdir gilfoyle-agent
cd gilfoyle-agent
openclaw init
```

Follow the same setup, but customize `SOUL.md` for a dev-focused agent.

**How agents collaborate:**

Monica can ask Gilfoyle to deploy code:
```
Monica: @Gilfoyle, push the latest blog post to the site.
Gilfoyle: Deployed. Live at afterapp.fun/blog/latest.
```

Each agent has its own skills and personality, but they share context.

## Step 10: Monitor and Iterate

Check your agent's activity:

```bash
openclaw status
```

Shows:
- Active agents
- Tasks completed
- API usage
- Costs (token usage)

**View logs:**
```bash
openclaw logs
```

See what your agent did, when, and why.

**Update configuration:**
```bash
openclaw configure
```

Change models, add channels, update API keys.

## Common Use Cases

### 1. Customer Support Agent
**Setup:**
- Connect to Discord or Telegram
- Load FAQs into agent's memory
- Deploy 24/7

**Benefit:** Instant responses, no human needed for common questions.

### 2. Content Publishing Agent
**Setup:**
- Connect to GitHub (for blog repo)
- Add web search (for research)
- Schedule daily content creation

**Benefit:** Publish blogs autonomously, no manual writing.

### 3. Email Triage Agent
**Setup:**
- Connect Gmail
- Define rules (urgent keywords, VIP senders)
- Auto-label, archive, or respond

**Benefit:** Inbox zero without reading every email.

### 4. Meeting Scheduler Agent
**Setup:**
- Connect Google Calendar
- Monitor email for meeting requests
- Auto-schedule based on availability

**Benefit:** No back-and-forth "Does 3 PM work?" emails.

## Troubleshooting

### Agent not responding?
```bash
openclaw gateway status
```
If gateway is down:
```bash
openclaw gateway restart
```

### API rate limits hit?
Check usage:
```bash
openclaw status
```
Consider switching to a cheaper model or adding rate limiting.

### Agent giving wrong answers?
Edit `SOUL.md` to clarify instructions. Agents follow what you write.

## Next Steps

You now have a working AI agent. Here's how to level up:

1. **Add more skills:** `openclaw skills list` shows all available integrations
2. **Build custom tools:** Write your own scripts, expose them to agents
3. **Deploy to production:** Host on a VPS (DigitalOcean, AWS, etc.) for 24/7 uptime
4. **Explore ClawMart:** Pre-built agents for specific tasks → [clawmart.com](https://clawmart.com)
5. **Read the Playbook:** Advanced patterns, workflows, and strategies → [playbook.openclaw.ai](https://playbook.openclaw.ai)

## Why This Matters

Setting up OpenClaw takes 15 minutes. But it fundamentally changes how you work:

**Before:**
- 10+ apps to manage
- Manual copy-pasting between tools
- Constant context-switching
- Things fall through the cracks

**After:**
- Agents handle routine tasks
- Workflows run autonomously
- You focus on high-value work
- Nothing gets missed

**This isn't the future. It's available right now.**

Install OpenClaw. Deploy your first agent. See what's possible when software works *for you* instead of demanding your attention.

---

**Ready to go deeper?** Explore [ClawMart](https://clawmart.com) for pre-built agents, or check out the [OpenClaw Playbook](https://playbook.openclaw.ai) for advanced multi-agent strategies.