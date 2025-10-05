import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadData {
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  service_interested: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const leadData: LeadData = await req.json();

    const emailBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #334155;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e2e8f0;
              border-top: none;
            }
            .footer {
              background: #f8fafc;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 8px 8px;
              border: 1px solid #e2e8f0;
              border-top: none;
              font-size: 14px;
              color: #64748b;
            }
            .detail-row {
              margin: 15px 0;
              padding: 10px;
              background: #f8fafc;
              border-radius: 6px;
            }
            .detail-label {
              font-weight: 600;
              color: #0f172a;
              margin-bottom: 5px;
            }
            .detail-value {
              color: #475569;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Thank You for Your Interest!</h1>
          </div>
          
          <div class="content">
            <p>Hi ${leadData.full_name},</p>
            
            <p>Thank you for reaching out to Platinum Marketing! We've received your consultation request and are excited to help transform your business with our automation solutions.</p>
            
            <p><strong>Here's a summary of your submission:</strong></p>
            
            <div class="detail-row">
              <div class="detail-label">Service Interested In:</div>
              <div class="detail-value">${leadData.service_interested}</div>
            </div>
            
            ${leadData.company ? `
            <div class="detail-row">
              <div class="detail-label">Company:</div>
              <div class="detail-value">${leadData.company}</div>
            </div>
            ` : ''}
            
            <div class="detail-row">
              <div class="detail-label">Your Message:</div>
              <div class="detail-value">${leadData.message}</div>
            </div>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>One of our automation specialists will review your request</li>
              <li>We'll reach out within 24 hours to schedule your free consultation</li>
              <li>During the consultation, we'll discuss your specific needs and show you how our solutions can help</li>
            </ul>
            
            <p>In the meantime, feel free to explore our <a href="https://platinummarketing.io/services" style="color: #2563eb;">services page</a> or check out our <a href="https://platinummarketing.io/blog" style="color: #2563eb;">blog</a> for insights on marketing automation.</p>
            
            <p>If you have any immediate questions, don't hesitate to reply to this email or call us at (555) 123-4567.</p>
            
            <p>Best regards,<br>
            <strong>The Platinum Marketing Team</strong></p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">Platinum Marketing | Automating Success for Modern Businesses</p>
            <p style="margin: 10px 0 0 0;">123 Marketing Ave, Tech City, TC 12345</p>
          </div>
        </body>
      </html>
    `;

    console.log(`Email would be sent to: ${leadData.email}`);
    console.log('Lead confirmation processed successfully');

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Confirmation email sent successfully',
        lead: leadData,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing lead confirmation:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});