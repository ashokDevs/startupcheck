export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: number
          inserted_at: string
          name: string | null
          subcategory_id: number | null
          updated_at: string
        }
        Insert: {
          id?: number
          inserted_at?: string
          name?: string | null
          subcategory_id?: number | null
          updated_at?: string
        }
        Update: {
          id?: number
          inserted_at?: string
          name?: string | null
          subcategory_id?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "subcategories"
            referencedColumns: ["id"]
          }
        ]
      }
      items: {
        Row: {
          checked: boolean | null
          desc: string | null
          id: number
          subcategory_id: number | null
          title: string
          userid: number | null
        }
        Insert: {
          checked?: boolean | null
          desc?: string | null
          id?: number
          subcategory_id?: number | null
          title: string
          userid?: number | null
        }
        Update: {
          checked?: boolean | null
          desc?: string | null
          id?: number
          subcategory_id?: number | null
          title?: string
          userid?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "items_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "items_userid_fkey"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      subcategories: {
        Row: {
          id: number
          inserted_at: string
          items: number | null
          name: string | null
          updated_at: string
        }
        Insert: {
          id?: number
          inserted_at?: string
          items?: number | null
          name?: string | null
          updated_at?: string
        }
        Update: {
          id?: number
          inserted_at?: string
          items?: number | null
          name?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "subcategories_items_fkey"
            columns: ["items"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          email: string
          id: number
          inserted_at: string
          updated_at: string
        }
        Insert: {
          email: string
          id?: number
          inserted_at?: string
          updated_at?: string
        }
        Update: {
          email?: string
          id?: number
          inserted_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
