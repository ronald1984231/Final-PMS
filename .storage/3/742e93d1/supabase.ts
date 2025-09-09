import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ewykfdwdhggstvunjcor.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3eWtmZHdkaGdnc3R2dW5qY29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczODk5ODUsImV4cCI6MjA3Mjk2NTk4NX0.3ywbocdZelaSFpCSaBFCc2U7kd93-8-SsjyXVG4Bijo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};