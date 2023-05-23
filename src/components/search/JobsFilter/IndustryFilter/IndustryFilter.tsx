import { FunctionComponent, memo, useMemo } from 'react';
import { SelectItem } from '@mantine/core';

import { useIndustries } from 'data/hooks';
import { Industry } from 'data/model';
import { Select } from 'components/common';

interface IndustryFilterProps {
  value: string;
  onChange: (industryId: string) => void;
}

export const IndustryFilter: FunctionComponent<IndustryFilterProps> = memo(({ value, onChange }) => {
  const { industries } = useIndustries();

  const options: SelectItem[] = useMemo(() => {
    return industries?.map((industry: Industry): SelectItem => ({
      value: industry.key.toString(),
      label: industry.title,
    })) || [
      { value: undefined, label: '(Нет данных)', disabled: true },
    ];
  }, [industries]);

  return (
    <Select
      value={value ?? ''}
      onChange={onChange}
      label="Отрасль"
      placeholder="Выберите отрасль"
      data={options}
      data-elem="industry-select"
    />
  );
});

IndustryFilter.displayName = 'IndustryFilter';