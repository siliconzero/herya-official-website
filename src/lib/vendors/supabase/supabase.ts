import { createClient } from '@supabase/supabase-js';

const url: string = import.meta.env.VITE_SUPABASE_URL as string;
const key: string = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const supabase = createClient(url, key);
export { supabase };
