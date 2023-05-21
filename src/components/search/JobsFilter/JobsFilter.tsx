import { Dispatch, FormEvent, FunctionComponent, useCallback, useEffect, useState } from 'react';

import { ResetFiltersButton } from './ResetFiltersButton';
import { IndustryFilter } from './IndustryFilter';
import { SalaryRangeFilter } from './SalaryRangeFilter';
import { JobFiltersState, SalaryRange, SearchAction, SearchActionType, initialJobFiltersState } from 'reducers/search';

import styles from './JobsFilter.module.scss';

interface JobsFilterProps {
  state: JobFiltersState;
  dispatch: Dispatch<SearchAction>;
}

export const JobsFilter: FunctionComponent<JobsFilterProps> = ({ state, dispatch }) => {
  const [industryId, setIndustryId] = useState(initialJobFiltersState.industryId);
  const [salaryRange, setSalaryRange] = useState(initialJobFiltersState.salaryRange);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (
      state.industryId !== industryId 
      || state.salaryRange.from !== salaryRange.from 
      || state.salaryRange.to !== salaryRange.to 
    ) {
      if (!isDirty) setIsDirty(true);
    } else {
      if (isDirty) setIsDirty(false);
    }
  }, [
    industryId,
    salaryRange.from,
    salaryRange.to,
    state.industryId,
    state.salaryRange.from,
    state.salaryRange.to,
  ]);

  const handleResetFilters = useCallback(() => {
    setIndustryId(initialJobFiltersState.industryId);
    setSalaryRange(initialJobFiltersState.salaryRange);
  }, []);

  const handleIndustryChange = useCallback((industryId: string) => {
    setIndustryId(industryId);
  }, []);

  const handleSalaryRangeChange = useCallback((salaryRange: SalaryRange) => {
    setSalaryRange(salaryRange);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    dispatch({
      type: SearchActionType.SetJobFilters,
      payload: {
        industryId,
        salaryRange,
      },
    });
  };

  return (
    <form action="javascript:void(0)" onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>
        <ResetFiltersButton onClick={handleResetFilters} disabled={!isDirty} />
      </div>
      <div className={styles.body}>
        <IndustryFilter value={industryId} onChange={handleIndustryChange} />
        <SalaryRangeFilter value={salaryRange} onChange={handleSalaryRangeChange} />
        <button type="submit" className={styles.applyBtn} disabled={!isDirty}>Применить</button>
      </div>
    </form>
  );
};