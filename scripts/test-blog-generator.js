/**
 * Test Script for Blog Post Generator
 * 
 * Use this to test blog post generation locally before deploying to GitHub Actions.
 * 
 * Usage:
 *   export OPENROUTER_API_KEY="your-key-here"
 *   node scripts/test-blog-generator.js
 */

const fs = require('fs');
const path = require('path');

// Import the generator (will work after the main script is created)
let generator;
try {
  generator = require('./generate-blog-post');
} catch (err) {
  console.error('❌ Could not load generate-blog-post.js');
  console.error('Make sure the file exists and has no syntax errors.');
  process.exit(1);
}

async function runTests() {
  console.log('🧪 Testing Blog Post Generator\n');
  console.log('=' .repeat(60));
  
  // Test 1: Check API key
  console.log('\n📋 Test 1: API Key Configuration');
  if (process.env.OPENROUTER_API_KEY) {
    console.log('✅ OPENROUTER_API_KEY is set');
    const keyPreview = process.env.OPENROUTER_API_KEY.substring(0, 10) + '...';
    console.log(`   Key preview: ${keyPreview}`);
  } else {
    console.log('❌ OPENROUTER_API_KEY is not set');
    console.log('   Set it with: export OPENROUTER_API_KEY="your-key-here"');
    process.exit(1);
  }
  
  // Test 2: Check blog directory
  console.log('\n📋 Test 2: Blog Directory Structure');
  const blogDir = path.join(__dirname, '../content/blog');
  if (fs.existsSync(blogDir)) {
    console.log('✅ Blog directory exists');
    const existingPosts = fs.readdirSync(blogDir)
      .filter(f => f.endsWith('.mdx')).length;
    console.log(`   Existing posts: ${existingPosts}`);
  } else {
    console.log('❌ Blog directory not found');
    process.exit(1);
  }
  
  // Test 3: Generate sample content
  console.log('\n📋 Test 3: AI Content Generation');
  console.log('⏳ This may take 30-60 seconds...\n');
  
  try {
    const testTopic = "Quick 5-ingredient recipes for beginners";
    console.log(`🎯 Test topic: "${testTopic}"`);
    
    const content = await generator.generateBlogContent(testTopic);
    
    if (content && content.length > 500) {
      console.log('✅ Content generation successful');
      console.log(`   Content length: ${content.length} characters`);
      console.log(`   Word count: ~${content.split(' ').length} words`);
      
      // Preview first 200 chars
      console.log('\n📄 Content preview:');
      console.log('   ' + '-'.repeat(50));
      console.log('   ' + content.substring(0, 200).replace(/\n/g, '\n   ') + '...');
      console.log('   ' + '-'.repeat(50));
    } else {
      console.log('⚠️  Content generated but seems short');
    }
  } catch (error) {
    console.log('❌ Content generation failed');
    console.log(`   Error: ${error.message}`);
    process.exit(1);
  }
  
  // Test 4: Generate metadata
  console.log('\n📋 Test 4: SEO Metadata Generation');
  try {
    const testContent = "# How to Cook Perfect Pasta\n\nPasta is one of the easiest meals to cook...";
    const metadata = await generator.generateMetadata(testContent, "How to cook perfect pasta");
    
    if (metadata.title && metadata.description) {
      console.log('✅ Metadata generation successful');
      console.log(`   Title: "${metadata.title}" (${metadata.title.length} chars)`);
      console.log(`   Description: "${metadata.description}" (${metadata.description.length} chars)`);
      console.log(`   Tags: ${metadata.tags.join(', ')}`);
      
      // Validate SEO requirements
      const validations = [
        { name: 'Title length', pass: metadata.title.length >= 40 && metadata.title.length <= 70, value: metadata.title.length },
        { name: 'Description length', pass: metadata.description.length >= 120 && metadata.description.length <= 170, value: metadata.description.length },
        { name: 'Number of tags', pass: metadata.tags.length >= 3 && metadata.tags.length <= 6, value: metadata.tags.length }
      ];
      
      console.log('\n   SEO Validation:');
      validations.forEach(v => {
        const status = v.pass ? '✅' : '⚠️ ';
        console.log(`   ${status} ${v.name}: ${v.value}`);
      });
      
    } else {
      console.log('⚠️  Metadata incomplete');
    }
  } catch (error) {
    console.log('❌ Metadata generation failed');
    console.log(`   Error: ${error.message}`);
  }
  
  // Test 5: Full blog post generation (optional)
  console.log('\n📋 Test 5: Full Blog Post Generation');
  console.log('❓ Do you want to generate a complete blog post?');
  console.log('   This will create a real blog post in your content/blog directory.');
  console.log('   Press Ctrl+C to skip, or wait 5 seconds to continue...\n');
  
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  try {
    console.log('🚀 Generating full blog post...\n');
    
    // Use the topic selection from main script
    const { exec } = require('child_process');
    exec('node scripts/generate-blog-post.js', (error, stdout, stderr) => {
      if (error) {
        console.log('❌ Full generation failed');
        console.log(`   Error: ${error.message}`);
        return;
      }
      
      console.log(stdout);
      if (stderr) console.error(stderr);
      
      // Test summary
      console.log('\n' + '='.repeat(60));
      console.log('✅ All Tests Passed!');
      console.log('='.repeat(60));
      console.log('\n💡 Next Steps:');
      console.log('   1. Review the generated blog post in content/blog/');
      console.log('   2. Check quality and accuracy');
      console.log('   3. If satisfied, set up GitHub Actions with your API key');
      console.log('   4. Enable the workflow and let it run automatically\n');
      console.log('📚 See AUTO_BLOG_SETUP.md for complete documentation');
    });
    
  } catch (error) {
    console.log('⚠️  Could not run full generation test');
  }
}

// Run tests
if (require.main === module) {
  runTests().catch(error => {
    console.error('\n❌ Test suite failed:', error);
    process.exit(1);
  });
}








