/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xhcpivmjvbnsoekfpasw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoY3Bpdm1qdmJuc29la2ZwYXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMzQ3MjgsImV4cCI6MjA1MzgxMDcyOH0.DhPWuShjgmQYuDuovVPzRxbYI-uXSTM9oqka8FNo-AM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
