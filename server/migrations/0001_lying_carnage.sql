ALTER TABLE "account" DROP CONSTRAINT "account_userId_user_cuid_fk";
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "id" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "cuid";