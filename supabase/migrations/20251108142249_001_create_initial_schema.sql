/*
  # Create initial schema for architecture firm website

  1. New Tables
    - `projects` - Portfolio projects with categories and services
    - `team_members` - Team profiles with roles and expertise
    - `blog_posts` - Insights and news articles
    - `contact_inquiries` - Form submissions from contact and consultation pages
    - `categories` - Project categories (Residential, Commercial, etc.)
    - `services` - Service offerings (Architectural, Structural, etc.)

  2. Security
    - Enable RLS on all tables
    - Public read access for projects, team_members, blog_posts, categories, services
    - Only authenticated access for contact_inquiries (admin only)
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text,
  icon text,
  image_url text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  slug text NOT NULL UNIQUE,
  description text,
  detailed_description text,
  icon text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  detailed_description text,
  category_id uuid REFERENCES categories(id),
  services text[] DEFAULT '{}',
  location text,
  client_name text,
  completion_date date,
  project_size text,
  team_leads text[] DEFAULT '{}',
  image_urls text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  challenges_solutions jsonb,
  metrics jsonb,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  expertise text[] DEFAULT '{}',
  bio text,
  image_url text,
  email text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text,
  content text,
  category text,
  author_name text,
  featured_image_url text,
  published_date timestamp DEFAULT now(),
  updated_date timestamp DEFAULT now(),
  status text DEFAULT 'published',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  inquiry_type text,
  category text,
  service text,
  message text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are publicly readable"
  ON categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Services are publicly readable"
  ON services FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Projects are publicly readable"
  ON projects FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Team members are publicly readable"
  ON team_members FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Published blog posts are publicly readable"
  ON blog_posts FOR SELECT
  TO public
  USING (status = 'published');

CREATE POLICY "Contact inquiries can be created"
  ON contact_inquiries FOR INSERT
  TO public
  WITH CHECK (true);
