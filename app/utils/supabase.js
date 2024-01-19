import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`;
const supabase = createClient(supabaseUrl, supabaseKey);

async function GatherItems(tab) {
  const Items = [];

  try {
    if (tab === "Product") {
      const { data: items, error } = await supabase
        .from("items")
        .select("title, desc")
        .eq("subcategory_id", 1);

      if (items) {
        Items.push(...items);
      }

      if (error) {
        throw new Error(`Error fetching items: ${error.message}`);
      }
    } else if (tab === "Process") {
      const { data: items, error } = await supabase
        .from("items")
        .select("title, desc")
        .eq("subcategory_id", 3);

      if (items) {
        Items.push(...items);
      }

      if (error) {
        throw new Error(`Error fetching items: ${error.message}`);
      }
    } else if (tab === "Price") {
      const { data: items, error } = await supabase
        .from("items")
        .select("title, desc")
        .eq("subcategory_id", 2);

      if (items) {
        Items.push(...items);
      }

      if (error) {
        throw new Error(`Error fetching items: ${error.message}`);
      }
    } else if (tab === "Promotion") {
      const { data: items, error } = await supabase
        .from("items")
        .select("title, desc")
        .eq("subcategory_id", 4);

      if (items) {
        Items.push(...items);
      }

      if (error) {
        throw new Error(`Error fetching items: ${error.message}`);
      }
    } else {
      // Handle any other tab values as needed
    }
  } catch (error) {
    console.error(error);
  }

  console.log(Items);
  return Items;
}




export default  GatherItems ;
