'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Code,
  Copy,
  Check,
  Key,
  Server,
  Link2,
  User,
  BarChart3,
  Clock,
  Package,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Terminal,
  BookOpen,
  Zap,
  Shield,
  Globe,
} from 'lucide-react';

// Types
interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  parameters?: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  requestBody?: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  responseExample: string;
  errorCodes: {
    code: number;
    description: string;
  }[];
}

// Sidebar navigation
const navigation = [
  { name: 'Introduction', href: '#introduction', icon: BookOpen },
  { name: 'Authentication', href: '#authentication', icon: Key },
  { name: 'Base URL', href: '#base-url', icon: Server },
  { name: 'Endpoints', href: '#endpoints', icon: Code },
  { name: 'Rate Limits', href: '#rate-limits', icon: Clock },
  { name: 'SDKs', href: '#sdks', icon: Package },
  { name: 'Code Examples', href: '#examples', icon: Terminal },
];

// Get method color styling
const getMethodColor = (method: string) => {
  switch (method) {
    case 'GET':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'POST':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'PUT':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'DELETE':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

// API Endpoints data
const endpoints: Endpoint[] = [
  {
    method: 'GET',
    path: '/links',
    description: 'Retrieve a list of all links associated with your account. Supports pagination and filtering.',
    parameters: [
      { name: 'page', type: 'integer', required: false, description: 'Page number for pagination (default: 1)' },
      { name: 'limit', type: 'integer', required: false, description: 'Number of items per page (default: 20, max: 100)' },
      { name: 'enabled', type: 'boolean', required: false, description: 'Filter by enabled status' },
      { name: 'sort', type: 'string', required: false, description: 'Sort by field (created_at, clicks, title)' },
      { name: 'order', type: 'string', required: false, description: 'Sort order (asc, desc)' },
    ],
    responseExample: `{
  "success": true,
  "data": {
    "links": [
      {
        "id": "lnk_abc123xyz",
        "title": "My YouTube Channel",
        "url": "https://youtube.com/@mychannel",
        "icon": "youtube",
        "enabled": true,
        "clicks": 1234,
        "position": 1,
        "created_at": "2024-01-15T10:30:00Z",
        "updated_at": "2024-01-20T14:22:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 45,
      "total_pages": 3
    }
  }
}`,
    errorCodes: [
      { code: 401, description: 'Unauthorized - Invalid or missing API key' },
      { code: 429, description: 'Rate limit exceeded' },
    ],
  },
  {
    method: 'POST',
    path: '/links',
    description: 'Create a new link in your profile. The link will be added to the end of your link list by default.',
    requestBody: [
      { name: 'title', type: 'string', required: true, description: 'Display title for the link (max 100 characters)' },
      { name: 'url', type: 'string', required: true, description: 'Target URL (must be valid URL format)' },
      { name: 'icon', type: 'string', required: false, description: 'Icon identifier (e.g., youtube, instagram, twitter)' },
      { name: 'enabled', type: 'boolean', required: false, description: 'Whether the link is visible (default: true)' },
      { name: 'position', type: 'integer', required: false, description: 'Position in the link list' },
    ],
    responseExample: `{
  "success": true,
  "data": {
    "id": "lnk_def456uvw",
    "title": "My Instagram",
    "url": "https://instagram.com/myprofile",
    "icon": "instagram",
    "enabled": true,
    "clicks": 0,
    "position": 5,
    "created_at": "2024-01-21T09:15:00Z",
    "updated_at": "2024-01-21T09:15:00Z"
  }
}`,
    errorCodes: [
      { code: 400, description: 'Bad Request - Invalid parameters or missing required fields' },
      { code: 401, description: 'Unauthorized - Invalid or missing API key' },
      { code: 403, description: 'Forbidden - Link limit reached for your plan' },
      { code: 422, description: 'Unprocessable Entity - Invalid URL format' },
    ],
  },
  {
    method: 'GET',
    path: '/links/:id',
    description: 'Retrieve detailed information about a specific link by its unique identifier.',
    parameters: [
      { name: 'id', type: 'string', required: true, description: 'Unique link identifier (path parameter)' },
    ],
    responseExample: `{
  "success": true,
  "data": {
    "id": "lnk_abc123xyz",
    "title": "My YouTube Channel",
    "url": "https://youtube.com/@mychannel",
    "icon": "youtube",
    "enabled": true,
    "clicks": 1234,
    "position": 1,
    "analytics": {
      "clicks_today": 42,
      "clicks_week": 256,
      "clicks_month": 890,
      "top_referrers": ["instagram.com", "twitter.com"],
      "top_countries": ["US", "ES", "MX"]
    },
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-20T14:22:00Z"
  }
}`,
    errorCodes: [
      { code: 401, description: 'Unauthorized - Invalid or missing API key' },
      { code: 404, description: 'Not Found - Link does not exist' },
    ],
  },
  {
    method: 'PUT',
    path: '/links/:id',
    description: 'Update an existing link. Only provided fields will be updated; omitted fields remain unchanged.',
    parameters: [
      { name: 'id', type: 'string', required: true, description: 'Unique link identifier (path parameter)' },
    ],
    requestBody: [
      { name: 'title', type: 'string', required: false, description: 'Updated display title' },
      { name: 'url', type: 'string', required: false, description: 'Updated target URL' },
      { name: 'icon', type: 'string', required: false, description: 'Updated icon identifier' },
      { name: 'enabled', type: 'boolean', required: false, description: 'Updated visibility status' },
      { name: 'position', type: 'integer', required: false, description: 'Updated position in list' },
    ],
    responseExample: `{
  "success": true,
  "data": {
    "id": "lnk_abc123xyz",
    "title": "My Updated YouTube Channel",
    "url": "https://youtube.com/@mynewchannel",
    "icon": "youtube",
    "enabled": true,
    "clicks": 1234,
    "position": 1,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-21T16:45:00Z"
  }
}`,
    errorCodes: [
      { code: 400, description: 'Bad Request - Invalid parameters' },
      { code: 401, description: 'Unauthorized - Invalid or missing API key' },
      { code: 404, description: 'Not Found - Link does not exist' },
      { code: 422, description: 'Unprocessable Entity - Invalid URL format' },
    ],
  },
  {
    method: 'DELETE',
    path: '/links/:id',
    description: 'Permanently delete a link from your profile. This action cannot be undone.',
    parameters: [
      { name: 'id', type: 'string', required: true, description: 'Unique link identifier (path parameter)' },
    ],
    responseExample: `{
  "success": true,
  "message": "Link successfully deleted",
  "data": {
    "id": "lnk_abc123xyz",
    "deleted_at": "2024-01-21T17:00:00Z"
  }
}`,
    errorCodes: [
      { code: 401, description: 'Unauthorized - Invalid or missing API key' },
      { code: 404, description: 'Not Found - Link does not exist' },
    ],
  },
  {
    method: 'GET',
    path: '/profile',
    description: 'Retrieve your profile information including bio, avatar, theme settings, and social links.',
    responseExample: `{
  "success": true,
  "data": {
    "id": "usr_xyz789abc",
    "username": "johndoe",
    "display_name": "John Doe",
    "bio": "Digital creator & entrepreneur",
    "avatar_url": "https://cdn.linkforge.app/avatars/johndoe.jpg",
    "theme": {
      "id": "theme_midnight",
      "name": "Midnight Purple",
      "primary_color": "#8B5CF6",
      "background_type": "gradient"
    },
    "profile_url": "https://linkforge.app/johndoe",
    "total_views": 15420,
    "total_clicks": 8934,
    "created_at": "2023-06-10T08:00:00Z",
    "updated_at": "2024-01-20T12:30:00Z"
  }
}`,
    errorCodes: [
      { code: 401, description: 'Unauthorized - Invalid or missing API key' },
    ],
  },
  {
    method: 'PUT',
    path: '/profile',
    description: 'Update your profile information. Only provided fields will be updated.',
    requestBody: [
      { name: 'display_name', type: 'string', required: false, description: 'Public display name (max 50 characters)' },
      { name: 'bio', type: 'string', required: false, description: 'Profile bio/description (max 300 characters)' },
      { name: 'avatar_url', type: 'string', required: false, description: 'URL to avatar image' },
      { name: 'theme_id', type: 'string', required: false, description: 'Theme identifier to apply' },
    ],
    responseExample: `{
  "success": true,
  "data": {
    "id": "usr_xyz789abc",
    "username": "johndoe",
    "display_name": "John D.",
    "bio": "Content creator | Tech enthusiast",
    "avatar_url": "https://cdn.linkforge.app/avatars/johndoe-new.jpg",
    "theme": {
      "id": "theme_ocean",
      "name": "Ocean Blue",
      "primary_color": "#0EA5E9",
      "background_type": "solid"
    },
    "profile_url": "https://linkforge.app/johndoe",
    "updated_at": "2024-01-21T18:00:00Z"
  }
}`,
    errorCodes: [
      { code: 400, description: 'Bad Request - Invalid parameters' },
      { code: 401, description: 'Unauthorized - Invalid or missing API key' },
      { code: 422, description: 'Unprocessable Entity - Invalid theme_id or avatar_url' },
    ],
  },
  {
    method: 'GET',
    path: '/analytics',
    description: 'Retrieve comprehensive analytics data for your profile and links over a specified time period.',
    parameters: [
      { name: 'period', type: 'string', required: false, description: 'Time period (7d, 30d, 90d, 12m, all). Default: 30d' },
      { name: 'start_date', type: 'string', required: false, description: 'Custom start date (ISO 8601 format)' },
      { name: 'end_date', type: 'string', required: false, description: 'Custom end date (ISO 8601 format)' },
      { name: 'group_by', type: 'string', required: false, description: 'Group results by (day, week, month)' },
    ],
    responseExample: `{
  "success": true,
  "data": {
    "period": {
      "start": "2024-01-01T00:00:00Z",
      "end": "2024-01-31T23:59:59Z"
    },
    "summary": {
      "total_views": 4520,
      "total_clicks": 2340,
      "unique_visitors": 3210,
      "click_rate": "51.8%",
      "avg_time_on_page": "45s"
    },
    "clicks_by_day": [
      { "date": "2024-01-01", "views": 150, "clicks": 78 },
      { "date": "2024-01-02", "views": 165, "clicks": 92 }
    ],
    "top_links": [
      { "id": "lnk_abc123", "title": "YouTube", "clicks": 890, "percentage": "38%" },
      { "id": "lnk_def456", "title": "Instagram", "clicks": 654, "percentage": "28%" }
    ],
    "referrers": [
      { "source": "instagram.com", "visits": 1240, "percentage": "27.4%" },
      { "source": "twitter.com", "visits": 890, "percentage": "19.7%" },
      { "source": "direct", "visits": 1560, "percentage": "34.5%" }
    ],
    "locations": [
      { "country": "US", "country_name": "United States", "visits": 1450 },
      { "country": "ES", "country_name": "Spain", "visits": 890 },
      { "country": "MX", "country_name": "Mexico", "visits": 654 }
    ],
    "devices": {
      "mobile": 2890,
      "desktop": 1420,
      "tablet": 210
    },
    "browsers": {
      "chrome": 2100,
      "safari": 1450,
      "firefox": 520,
      "other": 450
    }
  }
}`,
    errorCodes: [
      { code: 400, description: 'Bad Request - Invalid date format or period' },
      { code: 401, description: 'Unauthorized - Invalid or missing API key' },
      { code: 403, description: 'Forbidden - Analytics not available on your plan' },
    ],
  },
];

// SDKs data
const sdks = [
  {
    name: 'JavaScript / TypeScript',
    package: 'npm install @linkforge/sdk',
    description: 'Full TypeScript support with type definitions included',
    status: 'stable',
  },
  {
    name: 'Python',
    package: 'pip install linkforge',
    description: 'Python 3.8+ with async support',
    status: 'stable',
  },
  {
    name: 'Ruby',
    package: 'gem install linkforge',
    description: 'Ruby 2.7+ compatible',
    status: 'stable',
  },
];

// Code examples
const codeExamples = {
  authentication: `// Initialize the LinkForge client with your API key
import LinkForge from '@linkforge/sdk';

const client = new LinkForge({
  apiKey: 'lf_live_xxxxxxxxxxxxxxxxxxxx'
});

// Or use environment variables (recommended)
const client = new LinkForge({
  apiKey: process.env.LINKFORGE_API_KEY
});`,
  listLinks: `// List all links with pagination
const response = await client.links.list({
  page: 1,
  limit: 20,
  sort: 'clicks',
  order: 'desc'
});

console.log(response.data.links);
console.log(\`Total links: \${response.data.pagination.total}\`);`,
  createLink: `// Create a new link
const newLink = await client.links.create({
  title: 'My New YouTube Video',
  url: 'https://youtube.com/watch?v=xxxxx',
  icon: 'youtube',
  enabled: true
});

console.log(\`Created link: \${newLink.data.id}\`);`,
  updateLink: `// Update an existing link
const updatedLink = await client.links.update('lnk_abc123xyz', {
  title: 'Updated Title',
  enabled: false
});

console.log(\`Updated at: \${updatedLink.data.updated_at}\`);`,
  deleteLink: `// Delete a link
await client.links.delete('lnk_abc123xyz');
console.log('Link deleted successfully');`,
  getAnalytics: `// Get analytics for the last 30 days
const analytics = await client.analytics.get({
  period: '30d',
  group_by: 'day'
});

console.log(\`Total views: \${analytics.data.summary.total_views}\`);
console.log(\`Click rate: \${analytics.data.summary.click_rate}\`);

// Get analytics for a custom date range
const customAnalytics = await client.analytics.get({
  start_date: '2024-01-01',
  end_date: '2024-01-31'
});`,
};

// Component for copyable code blocks
function CodeBlock({ code, language = 'json' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto border border-white/10">
        <code className="text-sm text-gray-300 font-mono">{code}</code>
      </pre>
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition opacity-0 group-hover:opacity-100"
        title="Copy code"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}

// Component for endpoint documentation
function EndpointDoc({ endpoint }: { endpoint: Endpoint }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition text-left"
      >
        <span
          className={`px-3 py-1 rounded-md text-xs font-mono font-bold border ${getMethodColor(
            endpoint.method
          )}`}
        >
          {endpoint.method}
        </span>
        <code className="text-white font-mono text-sm flex-1">{endpoint.path}</code>
        <span className="text-gray-400 text-sm hidden md:block max-w-xs truncate">
          {endpoint.description.split('.')[0]}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-white/10 p-6 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-white font-medium mb-2">Description</h4>
            <p className="text-gray-400">{endpoint.description}</p>
          </div>

          {/* Parameters */}
          {endpoint.parameters && endpoint.parameters.length > 0 && (
            <div>
              <h4 className="text-white font-medium mb-3">Parameters</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b border-white/10">
                      <th className="pb-2 pr-4">Name</th>
                      <th className="pb-2 pr-4">Type</th>
                      <th className="pb-2 pr-4">Required</th>
                      <th className="pb-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {endpoint.parameters.map((param) => (
                      <tr key={param.name} className="border-b border-white/5">
                        <td className="py-2 pr-4">
                          <code className="text-purple-400">{param.name}</code>
                        </td>
                        <td className="py-2 pr-4">
                          <code className="text-yellow-400">{param.type}</code>
                        </td>
                        <td className="py-2 pr-4">
                          {param.required ? (
                            <span className="text-red-400">Yes</span>
                          ) : (
                            <span className="text-gray-500">No</span>
                          )}
                        </td>
                        <td className="py-2 text-gray-400">{param.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Request Body */}
          {endpoint.requestBody && endpoint.requestBody.length > 0 && (
            <div>
              <h4 className="text-white font-medium mb-3">Request Body</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b border-white/10">
                      <th className="pb-2 pr-4">Field</th>
                      <th className="pb-2 pr-4">Type</th>
                      <th className="pb-2 pr-4">Required</th>
                      <th className="pb-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {endpoint.requestBody.map((field) => (
                      <tr key={field.name} className="border-b border-white/5">
                        <td className="py-2 pr-4">
                          <code className="text-purple-400">{field.name}</code>
                        </td>
                        <td className="py-2 pr-4">
                          <code className="text-yellow-400">{field.type}</code>
                        </td>
                        <td className="py-2 pr-4">
                          {field.required ? (
                            <span className="text-red-400">Yes</span>
                          ) : (
                            <span className="text-gray-500">No</span>
                          )}
                        </td>
                        <td className="py-2 text-gray-400">{field.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Response Example */}
          <div>
            <h4 className="text-white font-medium mb-3">Response Example</h4>
            <CodeBlock code={endpoint.responseExample} language="json" />
          </div>

          {/* Error Codes */}
          <div>
            <h4 className="text-white font-medium mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              Error Codes
            </h4>
            <div className="space-y-2">
              {endpoint.errorCodes.map((error) => (
                <div
                  key={error.code}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/50"
                >
                  <span className="text-red-400 font-mono font-bold">{error.code}</span>
                  <span className="text-gray-400">{error.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ApiDocsPage() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <Header />

      <div className="pt-24 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-white font-semibold mb-4">API Reference</h3>
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link
                    href="/developers/docs"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    General Documentation
                  </Link>
                  <Link
                    href="/developers"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm mt-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Developer Portal
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="min-w-0">
              {/* Introduction Section */}
              <section id="introduction" className="mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                  <Code className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-sm">API v1</span>
                </div>

                <h1 className="text-4xl font-bold text-white mb-4">API Reference</h1>

                <p className="text-xl text-gray-400 mb-8">
                  Welcome to the LinkForge API documentation. Our RESTful API enables you to
                  programmatically manage your links, profiles, and access detailed analytics data.
                  Build powerful integrations and automate your workflow with ease.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: Zap,
                      title: 'RESTful Design',
                      desc: 'Standard HTTP methods with JSON responses',
                    },
                    {
                      icon: Shield,
                      title: 'Secure',
                      desc: 'Bearer token authentication with HTTPS',
                    },
                    {
                      icon: Globe,
                      title: 'Global CDN',
                      desc: 'Low latency endpoints worldwide',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <item.icon className="w-8 h-8 text-purple-400 mb-2" />
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Authentication Section */}
              <section id="authentication" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Key className="w-6 h-6 text-purple-400" />
                  Authentication
                </h2>

                <p className="text-gray-400 mb-6">
                  All API requests require authentication using a Bearer token. You can generate your
                  API key from the{' '}
                  <Link href="/dashboard/settings" className="text-purple-400 hover:underline">
                    dashboard settings
                  </Link>
                  . Keep your API key secure and never expose it in client-side code.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-medium mb-3">Getting Your API Key</h3>
                    <ol className="list-decimal list-inside text-gray-400 space-y-2">
                      <li>Log in to your LinkForge dashboard</li>
                      <li>
                        Navigate to{' '}
                        <Link href="/dashboard/settings" className="text-purple-400 hover:underline">
                          Settings &rarr; API
                        </Link>
                      </li>
                      <li>Click &quot;Generate New API Key&quot;</li>
                      <li>Copy and securely store your key (it will only be shown once)</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-3">Using Bearer Tokens</h3>
                    <p className="text-gray-400 mb-4">
                      Include your API key in the <code className="text-purple-400">Authorization</code>{' '}
                      header of every request:
                    </p>
                    <div className="relative group">
                      <div className="p-4 rounded-xl bg-gray-900 border border-white/10 font-mono text-sm">
                        <span className="text-gray-500">Authorization:</span>{' '}
                        <span className="text-green-400">Bearer lf_live_xxxxxxxxxxxxxxxxxxxx</span>
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard('Authorization: Bearer lf_live_xxxxxxxxxxxxxxxxxxxx', 'auth')
                        }
                        className="absolute top-2 right-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition opacity-0 group-hover:opacity-100"
                      >
                        {copiedSection === 'auth' ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="text-yellow-400 font-medium">Security Best Practices</h4>
                        <ul className="text-gray-400 text-sm mt-2 space-y-1">
                          <li>Never commit API keys to version control</li>
                          <li>Use environment variables for key storage</li>
                          <li>Rotate your API keys periodically</li>
                          <li>Use separate keys for development and production</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Base URL Section */}
              <section id="base-url" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6 text-purple-400" />
                  Base URL
                </h2>

                <p className="text-gray-400 mb-4">
                  All API endpoints are relative to the following base URL:
                </p>

                <div className="relative group">
                  <div className="p-4 rounded-xl bg-gray-900 border border-white/10 font-mono text-lg">
                    <span className="text-purple-400">https://api.linkforge.app/v1</span>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard('https://api.linkforge.app/v1', 'baseurl')
                    }
                    className="absolute top-2 right-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition opacity-0 group-hover:opacity-100"
                  >
                    {copiedSection === 'baseurl' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <p className="text-gray-500 text-sm mt-4">
                  Example: To list all links, make a request to{' '}
                  <code className="text-purple-400">https://api.linkforge.app/v1/links</code>
                </p>
              </section>

              {/* Endpoints Section */}
              <section id="endpoints" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-6 h-6 text-purple-400" />
                  Endpoints
                </h2>

                <p className="text-gray-400 mb-8">
                  Below are all available API endpoints. Click on any endpoint to view detailed
                  documentation including parameters, request body, response examples, and error codes.
                </p>

                {/* Links Endpoints */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Link2 className="w-5 h-5 text-purple-400" />
                    Links
                  </h3>
                  <div className="space-y-3">
                    {endpoints.slice(0, 5).map((endpoint, index) => (
                      <EndpointDoc key={index} endpoint={endpoint} />
                    ))}
                  </div>
                </div>

                {/* Profile Endpoints */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-400" />
                    Profile
                  </h3>
                  <div className="space-y-3">
                    {endpoints.slice(5, 7).map((endpoint, index) => (
                      <EndpointDoc key={index} endpoint={endpoint} />
                    ))}
                  </div>
                </div>

                {/* Analytics Endpoints */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    Analytics
                  </h3>
                  <div className="space-y-3">
                    {endpoints.slice(7).map((endpoint, index) => (
                      <EndpointDoc key={index} endpoint={endpoint} />
                    ))}
                  </div>
                </div>
              </section>

              {/* Rate Limits Section */}
              <section id="rate-limits" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-purple-400" />
                  Rate Limits
                </h2>

                <p className="text-gray-400 mb-6">
                  API requests are rate limited based on your subscription plan. Rate limits reset
                  every minute. Exceeding the limit will return a{' '}
                  <code className="text-red-400">429 Too Many Requests</code> response.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 text-sm border-b border-white/10">
                        <th className="pb-4 pr-4">Plan</th>
                        <th className="pb-4 pr-4">Requests / Minute</th>
                        <th className="pb-4 pr-4">Requests / Day</th>
                        <th className="pb-4">Burst Limit</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-white/5">
                        <td className="py-4 pr-4 font-medium">Free</td>
                        <td className="py-4 pr-4">60</td>
                        <td className="py-4 pr-4">1,000</td>
                        <td className="py-4">10</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 pr-4 font-medium">Pro</td>
                        <td className="py-4 pr-4">120</td>
                        <td className="py-4 pr-4">10,000</td>
                        <td className="py-4">30</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 pr-4 font-medium">Business</td>
                        <td className="py-4 pr-4">300</td>
                        <td className="py-4 pr-4">100,000</td>
                        <td className="py-4">100</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-4 font-medium">Enterprise</td>
                        <td className="py-4 pr-4">Custom</td>
                        <td className="py-4 pr-4">Unlimited</td>
                        <td className="py-4">Custom</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-2">Rate Limit Headers</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Each API response includes headers to help you track your rate limit status:
                  </p>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-purple-400">X-RateLimit-Limit:</span>
                      <span className="text-gray-400">Maximum requests per minute</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-purple-400">X-RateLimit-Remaining:</span>
                      <span className="text-gray-400">Requests remaining in current window</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-purple-400">X-RateLimit-Reset:</span>
                      <span className="text-gray-400">Unix timestamp when the limit resets</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* SDKs Section */}
              <section id="sdks" className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Package className="w-6 h-6 text-purple-400" />
                  Official SDKs
                </h2>

                <p className="text-gray-400 mb-6">
                  We provide official SDKs for popular programming languages to make integration
                  easier. All SDKs are open source and available on GitHub.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  {sdks.map((sdk) => (
                    <div
                      key={sdk.name}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-medium">{sdk.name}</h3>
                        <span className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                          {sdk.status}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">{sdk.description}</p>
                      <div className="relative group">
                        <code className="block text-sm text-purple-400 bg-gray-900 p-2 rounded-lg overflow-x-auto">
                          {sdk.package}
                        </code>
                        <button
                          onClick={() => copyToClipboard(sdk.package, sdk.name)}
                          className="absolute top-1 right-1 p-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition opacity-0 group-hover:opacity-100"
                        >
                          {copiedSection === sdk.name ? (
                            <Check className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Code Examples Section */}
              <section id="examples">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-purple-400" />
                  Code Examples
                </h2>

                <p className="text-gray-400 mb-8">
                  Here are practical JavaScript examples using our official SDK to help you get
                  started quickly.
                </p>

                <div className="space-y-8">
                  {/* Authentication Example */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Initializing the Client</h3>
                    <CodeBlock code={codeExamples.authentication} language="javascript" />
                  </div>

                  {/* List Links Example */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">List All Links</h3>
                    <CodeBlock code={codeExamples.listLinks} language="javascript" />
                  </div>

                  {/* Create Link Example */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Create a New Link</h3>
                    <CodeBlock code={codeExamples.createLink} language="javascript" />
                  </div>

                  {/* Update Link Example */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Update a Link</h3>
                    <CodeBlock code={codeExamples.updateLink} language="javascript" />
                  </div>

                  {/* Delete Link Example */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Delete a Link</h3>
                    <CodeBlock code={codeExamples.deleteLink} language="javascript" />
                  </div>

                  {/* Analytics Example */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Get Analytics Data</h3>
                    <CodeBlock code={codeExamples.getAnalytics} language="javascript" />
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Build?</h3>
                  <p className="text-gray-300 mb-6">
                    Get your API key and start integrating LinkForge into your applications today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/dashboard/settings"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition"
                    >
                      <Key className="w-5 h-5" />
                      Get API Key
                    </Link>
                    <Link
                      href="/developers"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition border border-white/20"
                    >
                      <ChevronRight className="w-5 h-5" />
                      Developer Portal
                    </Link>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
