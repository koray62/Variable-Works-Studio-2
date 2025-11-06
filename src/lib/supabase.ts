import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://vpbkvlixqtbvbecvxstj.supabase.co';
const supabaseKey = 'sb_publishable_IDjZdjmZbA6DZAicZCFAzQ_ZULb4Lnm';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };