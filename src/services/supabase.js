import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aeyhpbdlgoadrbhklwof.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFleWhwYmRsZ29hZHJiaGtsd29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0ODE5NjAsImV4cCI6MjA0NDA1Nzk2MH0.3JHT8ojeyT_DA02tICrySjm6S6JYLl0ksh1d-gHtde8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
