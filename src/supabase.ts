import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://eudipcpmlglxxybbotga.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1ZGlwY3BtbGdseHh5YmJvdGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NTA4ODMsImV4cCI6MjA5MDEyNjg4M30.deR8om3Y5x3fqIIiM8Sbm_gpeJdZk7UQxSHKERKHZfQ"

export const supabase = createClient(supabaseUrl, supabaseKey)git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/omrawatw/cyphernest.co.git
git push -u origin main