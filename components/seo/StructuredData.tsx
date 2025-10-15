import React from 'react';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema for brand info
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chowboy',
    url: 'https://chowboy.io',
    logo: 'https://chowboy.io/chowboy-logo.png',
    description: 'AI-powered recipe manager and cooking companion app',
    sameAs: [
      'https://apps.apple.com/ca/app/chowboy/id6741332753',
    ],
  };

  return <StructuredData data={schema} />;
}

// WebSite Schema for search functionality
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Chowboy',
    url: 'https://chowboy.io',
    description: 'Import recipes from any website, get AI-powered cooking tips, and discover personalized recipe recommendations',
  };

  return <StructuredData data={schema} />;
}

// Software Application Schema for the app
export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Chowboy',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    description: 'Import recipes from anywhere, get AI-powered cooking tips, manage grocery lists, and discover personalized recipe recommendations',
  };

  return <StructuredData data={schema} />;
}

// Recipe Schema for recipe pages
interface RecipeSchemaProps {
  recipe: {
    title: string;
    description: string;
    image?: string;
    prepTime: number;
    cookTime: number;
    totalTime: number;
    servings: number;
    ingredients: Array<{ item: string; amount: string }>;
    instructions: Array<{ step: number; instruction: string }>;
    nutrition?: {
      calories?: number;
      protein?: string;
      carbohydrates?: string;
      fat?: string;
    };
    author: string;
    datePublished: string;
  };
}

export function RecipeSchema({ recipe }: RecipeSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: recipe.image ? `https://chowboy.io${recipe.image}` : undefined,
    author: {
      '@type': 'Person',
      name: recipe.author,
    },
    datePublished: recipe.datePublished,
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${recipe.totalTime}M`,
    recipeYield: recipe.servings,
    recipeIngredient: recipe.ingredients.map(ing => `${ing.amount} ${ing.item}`),
    recipeInstructions: recipe.instructions.map(inst => ({
      '@type': 'HowToStep',
      text: inst.instruction,
    })),
    nutrition: recipe.nutrition ? {
      '@type': 'NutritionInformation',
      calories: recipe.nutrition.calories ? `${recipe.nutrition.calories} calories` : undefined,
      proteinContent: recipe.nutrition.protein,
      carbohydrateContent: recipe.nutrition.carbohydrates,
      fatContent: recipe.nutrition.fat,
    } : undefined,
  };

  return <StructuredData data={schema} />;
}

// Article Schema for blog posts
interface ArticleSchemaProps {
  article: {
    title: string;
    description: string;
    author: string;
    date: string;
    image?: string;
  };
  url: string;
}

export function ArticleSchema({ article, url }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ? `https://chowboy.io${article.image}` : undefined,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chowboy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://chowboy.io/chowboy-logo.png',
      },
    },
    datePublished: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://chowboy.io${url}`,
    },
  };

  return <StructuredData data={schema} />;
}

// Breadcrumb Schema
interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://chowboy.io${item.url}`,
    })),
  };

  return <StructuredData data={schema} />;
}

// FAQ Schema for FAQ sections
interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={schema} />;
}

// HowTo Schema for instructional content
interface HowToSchemaProps {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[];
  tool?: string[];
  steps: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
}

export function HowToSchema({ name, description, image, totalTime, estimatedCost, supply, tool, steps }: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image: image ? `https://chowboy.io${image}` : undefined,
    totalTime,
    estimatedCost,
    supply: supply?.map(item => ({
      '@type': 'HowToSupply',
      name: item,
    })),
    tool: tool?.map(item => ({
      '@type': 'HowToTool',
      name: item,
    })),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image ? `https://chowboy.io${step.image}` : undefined,
      url: step.url ? `https://chowboy.io${step.url}` : undefined,
    })),
  };

  return <StructuredData data={schema} />;
}

