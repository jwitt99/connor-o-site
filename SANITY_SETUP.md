# Sanity CMS Setup

## Project Configuration
- **Project ID:** 75fe0b7u
- **Dataset:** production

## Installation

Install the required Sanity packages:

```bash
npm install sanity @sanity/client @sanity/image-url @sanity/vision next-sanity
```

## Files Created

### Configuration
- `sanity.config.ts` - Main Sanity Studio configuration
- `lib/sanity.client.ts` - Sanity client for fetching data
- `lib/sanity.image.ts` - Image URL builder utility

### Schemas
- `sanity/schemas/galleryItem.ts` - Gallery items schema
- `sanity/schemas/blogPost.ts` - Blog posts schema
- `sanity/schemas/profile.ts` - Profile data schema
- `sanity/schemas/agent.ts` - Agent information schema
- `sanity/schemas/index.ts` - Schema exports

## Running Sanity Studio

To run the Sanity Studio locally:

```bash
npx sanity dev
```

This will start the studio at `http://localhost:3333`

## Deploying Sanity Studio

To deploy the studio:

```bash
npx sanity deploy
```

## Using Sanity Data in Your App

### Fetching Gallery Items

```typescript
import { client } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity.image'

const query = `*[_type == "galleryItem"] | order(order asc) {
  _id,
  title,
  description,
  image,
  category,
  order
}`

const galleryItems = await client.fetch(query)

// Get image URL
const imageUrl = urlFor(item.image).width(800).url()
```

### Fetching Profile Data

```typescript
const query = `*[_type == "profile"][0] {
  name,
  bio,
  headshot,
  resume,
  email,
  phone,
  instagram
}`

const profile = await client.fetch(query)
```

### Fetching Agent Data

```typescript
const query = `*[_type == "agent"][0]`
const agent = await client.fetch(query)
```

## Next Steps

1. Install the packages listed above
2. Run `npx sanity dev` to start the studio
3. Create your content in the studio
4. Update your Next.js pages to fetch from Sanity instead of the local CMS file
5. Deploy the studio with `npx sanity deploy`

## Environment Variables (Optional)

If you need to add environment variables, create `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=75fe0b7u
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
```

Note: The project ID and dataset are already hardcoded in the config files, so environment variables are optional unless you need a token for mutations.
