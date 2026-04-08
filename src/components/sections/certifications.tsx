import { CERTIFICATIONS, SECTION_DESCRIPTIONS } from '@/lib/data';
import CertificationDetails from '@/components/data-display/certification-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const CertificationsSection = () => {
  return (
    <Container id="certifications">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Certifications" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          {SECTION_DESCRIPTIONS.certifications}
        </Typography>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CERTIFICATIONS?.map((certification, index) => (
          <CertificationDetails {...certification} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default CertificationsSection;
