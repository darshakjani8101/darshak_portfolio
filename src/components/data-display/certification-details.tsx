import { Calendar, Award, ExternalLink } from 'lucide-react';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import { CertificationDetails as CertificationDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const CertificationDetails = ({
  name,
  organization,
  description,
  issueDate,
  expiryDate,
  url,
}: CertificationDetailsProps) => {
  return (
      <Card className="group mx-auto flex w-full flex-col gap-4 dark:bg-transparent border p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:border-white">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
          <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <Typography variant="subtitle" className="font-semibold text-gray-900">
            {name}
          </Typography>
          <div className="mt-1 flex items-center gap-3">
            <Typography className="text-sm text-gray-600 dark:text-gray-400">
              {organization}
            </Typography>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-red-600 transition-colors hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                View Certification
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <Typography className="text-gray-700 dark:text-gray-500">
        {description}
      </Typography>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Calendar className="h-4 w-4" />
          <Typography className="text-sm">
            {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
              issueDate
            )}
          </Typography>
        </div>
        <Typography className="text-sm font-medium text-green-600 dark:text-green-400">
          {expiryDate
            ? `Valid until ${new Intl.DateTimeFormat('en-US', dateFormatOptions).format(expiryDate)}`
            : 'No Expiration'}
        </Typography>
      </div>
    </Card>
  );
};

export default CertificationDetails;
