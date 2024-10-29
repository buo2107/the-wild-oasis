import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // 若session data 存在，表示該用戶不久前確實login過
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // Though we can just get the user from the session above, but it's more secure to redownload everything from Supabase, than directly using the session data
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
