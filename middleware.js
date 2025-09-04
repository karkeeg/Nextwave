import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);
  const hostname = request.headers.get('host');
  const isStaging = hostname === 'staging.nextwaveai.com' || 
                   hostname === 'localhost:3000';

  // Add noindex header for staging
  if (isStaging) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    
    // Basic Auth for staging
    const basicAuth = request.headers.get('authorization');
    const auth = {
      user: process.env.BASIC_AUTH_USER || 'nextwave',
      pass: process.env.BASIC_AUTH_PASS || 'changeme'
    };

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      if (user === auth.user && pwd === auth.pass) {
        return response;
      }
    }

    if (isStaging) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Staging Environment"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
