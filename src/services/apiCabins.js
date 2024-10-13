import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }
}

export async function createCabin(newCabinObj) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabinObj]) // Since our Form data use the same id-name as we use in the supabase, so here doesn't need to transform the data format
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }
}
