import { createClient } from '@supabase/supabase-js'
import type {
  Database,
  Tables,
  TablesInsert,
  TablesUpdate,
} from './database.types'

// 환경 변수 가져오기
const { VITE_SUPABASE_URL, VITE_SUPABASE_API_KEY } = import.meta.env

// Supabase 클라이언트 인스턴스
const supabase = createClient<Database>(
  VITE_SUPABASE_URL,
  VITE_SUPABASE_API_KEY
)

// 인스턴스 기본 내보내기
export default supabase

// Users 타입 내보내기
export type User = Tables<'users'>
export type UserPartial = Partial<User>
export type UserInsert = TablesInsert<'users'>
export type UserUpdate = TablesUpdate<'users'>

// Posts 타입 내보내기
export type Post = Tables<'posts'>
export type PostPartial = Partial<Post>
export type PostInsert = TablesInsert<'posts'>
export type PostUpdate = TablesUpdate<'posts'>
