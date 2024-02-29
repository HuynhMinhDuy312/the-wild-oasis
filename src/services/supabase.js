import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hyvqzxmkgopgjlbrueyf.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5dnF6eG1rZ29wZ2psYnJ1ZXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NjcwNTgsImV4cCI6MjAyNDE0MzA1OH0.XyIuvjxsOrsXbT0XjQVP-p9sknKWFCsVV3auDZqjeQc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
