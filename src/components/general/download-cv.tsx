'use client';


import Button from '@/components/general/button';
import { FILE_URLS } from '@/lib/data';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open(FILE_URLS.resume, '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
