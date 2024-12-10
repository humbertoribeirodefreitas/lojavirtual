import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://kxonmtoifaoedkwvggwz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4b25tdG9pZmFvZWRrd3ZnZ3d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyNzg2NTgsImV4cCI6MjA0Nzg1NDY1OH0._uglFjlDlfrL6xb8UyiLRSJapmrzPMBFF4RsrfnMkP4"
)