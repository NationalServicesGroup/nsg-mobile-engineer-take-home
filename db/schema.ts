import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const expenses = sqliteTable('expenses', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  amount: integer('amount').notNull(), // stored in cents (e.g., $12.50 = 1250)
  category: text('category').notNull(), // e.g., 'food', 'transport', 'entertainment', 'utilities', 'other'
  date: text('date').notNull(),
  notes: text('notes'),
  createdAt: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at')
    .notNull()
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

export type Expense = typeof expenses.$inferSelect;
export type NewExpense = typeof expenses.$inferInsert;
