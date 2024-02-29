import Chrome from '@/components/chrome/Container';

export default function InitialLoadingPage(props: { index: number }) {
  return <Chrome {...props} />;
}

InitialLoadingPage.displayName = 'Chrome';
