---
date: 2026-10-06
description: Translate with Claude, using Anthropic's models.
---

# Claude

Translations that read naturally, using Anthropic's models.

[Create an API key](https://console.anthropic.com/settings/keys)

To use this provider, go to **Enupal Translate → Settings → Providers**:

*   Enable **Claude**
*   Add your API key
*   Pick a model
*   Save Settings

## Settings

**API key** — your Anthropic key. Accepts an environment variable such as `$CLAUDE_KEY`.

**API base URL** — leave empty for the official Anthropic API. Set it if you route through a gateway or proxy.

**Model** — pick from the list, or choose **Custom** to enter a model identifier.

**Effort** — how much reasoning the model spends on each batch. Translation is shallow work, so **Low** is both cheaper and faster with no real quality cost. Only applies to models that support it.

**Max tokens** — the ceiling on the response for one batch. Raise it if you see "hit the max token limit" errors on very long entries.

**Temperature** — only sent to older models. Current Claude models reject the parameter, so it is omitted automatically for them.

**Custom prompt** — optional. Supports `{source}`, `{target}` and `{count}`, the same as OpenAI. The rules that keep the batch format intact are always appended automatically.

::: tip
If a translation fails with a message about the max token limit, lower the amount of content per entry or raise **Max tokens**. Very long entries are split into several requests automatically, but a single enormous field cannot be split.
:::
