# React Native Code Challenge: Personal Expense Tracker

## Overview

Welcome to our React Native code challenge! You'll be building a **Personal Expense Tracker** using React Native with Expo. This challenge is designed to assess your mobile development skills and your understanding of the tools and patterns involved.

> **Note:** We know AI tools exist. Use whatever tools you'd like to complete this challenge. During the follow-up call, we'll ask you to walk through your code and explain the concepts, patterns, and decisions behind it.

## Requirements

1. Use React Native with Expo
2. **Implement navigation using Expo Router** — [Expo Router](https://docs.expo.dev/router/introduction/) is already installed
3. Use TypeScript for all code
4. Implement local data storage using expo-sqlite with Drizzle ORM
5. Style your components (any styling method is fine)
6. Ensure your code is properly linted (`npx expo lint`)

## What to Build

Create the following screens using Expo Router:

### 1. Expense List Screen (`/`)

- Display a list of expenses
- Each item should show the title, amount (formatted as currency), and category
- Include a button to add a new expense
- Implement pull-to-refresh to update the list

### 2. Add Expense Screen (`/add`)

- Input fields: title, amount, category, date, and optional notes
- Categories: `food`, `transport`, `entertainment`, `utilities`, `other`
- Validate inputs before saving (title required, amount must be positive)
- Save to the local SQLite database using Drizzle ORM

### 3. Expense Detail Screen (`/[id]`)

- Show full details of a selected expense
- Include options to edit or delete the expense

### 4. Edit Expense Screen (`/[id]/edit`)

- Allow users to modify expense details
- Update the record in the database

> The paths above are suggestions — you can adjust the route structure as long as it maintains a logical hierarchy.

## Getting Started

1. Create your own repo using the template (see [Getting This Repo](#getting-this-repo))
2. Clone your new repository
3. Install dependencies: `bun install`
3. Start the Expo dev server: `npx expo start`
4. Run the linter: `npx expo lint`

## Dev Tools Plugins

This project includes dev tools plugins for **Drizzle Studio** and **TanStack Query**:

1. Start your Expo dev server: `npx expo start`
2. Press `shift + m` to open the list of available dev tools plugins
3. Select the plugin you want:
   - **Drizzle Studio** — inspect and manage your database
   - **TanStack Query dev tools** — inspect queries and cache

These are development-only and won't affect production builds.

## Project Structure

```
db/
  schema.ts     — Drizzle schema (expenses table, pre-defined)
  client.ts     — Drizzle client instance
constants/
  db.ts         — Database name constant
providers/
  app-providers.tsx — App-wide providers (QueryClient, migrations)
drizzle/
  ...           — Migration files (auto-applied on app load)
```

### Important Notes

- The Drizzle schema is pre-defined in `db/schema.ts` — use the `Expense` and `NewExpense` types
- **Amounts are stored in cents** (e.g., `$12.50` → `1250`) to avoid floating-point issues
- Migrations are automatically applied when the app loads
- TanStack Query is already configured and available

## Bonus (Optional)

If you have extra time:

1. Use TanStack Query for data fetching with optimistic updates and cache invalidation
2. Add a summary view showing total spending or spending by category
3. Add unit tests for your components or hooks
4. Implement basic accessibility features

## Getting This Repo

1. Click the **"Use this template"** button at the top of this repository
2. Select **"Create a new repository"**
3. Set the owner to your personal GitHub account
4. Name it whatever you'd like (e.g., `nsg-mobile-challenge`)
5. Set visibility to **Private**
6. Click **"Create repository"**

You now have your own private copy to work in.

## Submission

1. Ensure all changes are committed and pushed
2. Go to your repository's **Settings → Collaborators → Add people**
3. Add the following reviewers as collaborators with **Read** access:
   - `joh-nsg` `juliusoh`
4. Reply to the email thread you received with a link to your repository

## Evaluation

We will evaluate your submission based on:

- Correct implementation of required features
- Code quality, organization, and TypeScript usage
- Effective use of expo-sqlite with Drizzle ORM
- Git usage and commit history
- Proper linting and adherence to the ESLint configuration
