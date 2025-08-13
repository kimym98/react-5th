function useAuth() {
  //supabase 통신을 통해서 로그인된 유저 | 게스트
  const isAuth = true;

  return { isAuth };
}

export default useAuth;
