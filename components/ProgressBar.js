import { useEffect } from 'react';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';

NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      NProgress.start();
    };

    const handleRouteComplete = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteComplete);
    };
  }, []);

  return null;
}

