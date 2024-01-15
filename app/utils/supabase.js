import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`;
const supabase = createClient(supabaseUrl, supabaseKey);

async function GatherItems() {
  const Items = [];
  try {
    let { data: items, error } = await supabase
      .from("items")
      .select("title,desc");

    if (error) {
      throw new Error(`Error fetching items: ${error.message}`);
    }

    Items.push(...items);
    console.log(Items);
  } catch (error) {
    console.error(error);
  }

  return Items;
}


export default  GatherItems ;
