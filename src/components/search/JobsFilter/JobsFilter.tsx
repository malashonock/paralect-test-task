import { FormEvent, FunctionComponent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { ResetFiltersButton } from './ResetFiltersButton';
import { IndustryFilter } from './IndustryFilter';
import { SalaryRangeFilter } from './SalaryRangeFilter';
import { useIsDirty, useIsReset } from './hooks';
import { selectJobFilters, submitJobFilters } from 'store';
import { JobFiltersState, SalaryFilterState } from 'store/types';

import styles from './JobsFilter.module.scss';

const clearedJobFiltersState: JobFiltersState = {
  industryId: undefined,
  salaryFrom: undefined,
  salaryTo: undefined,
}

interface JobsFilterProps {
  className?: string;
}

export const JobsFilter: FunctionComponent<JobsFilterProps> = ({ className }) => {
  const submittedJobFiltersState = useSelector(selectJobFilters);
  const dispatch = useDispatch();

  const [industryId, setIndustryId] = useState(submittedJobFiltersState.industryId);
  const [salaryFrom, setSalaryFrom] = useState(submittedJobFiltersState.salaryFrom);
  const [salaryTo, setSalaryTo] = useState(submittedJobFiltersState.salaryTo);
  
  const isDirty = useIsDirty({ industryId, salaryFrom, salaryTo }, submittedJobFiltersState);
  const isReset = useIsReset({ industryId, salaryFrom, salaryTo }, clearedJobFiltersState);

  const handleResetFilters = useCallback(() => {
    setIndustryId(clearedJobFiltersState.industryId);
    setSalaryFrom(clearedJobFiltersState.salaryFrom);
    setSalaryTo(clearedJobFiltersState.salaryTo);
  }, []);

  const handleIndustryChange = useCallback((industryId: string) => {
    setIndustryId(industryId);
  }, []);

  const handleSalaryRangeChange = useCallback((salaryRange: SalaryFilterState) => {
    setSalaryFrom(salaryRange.salaryFrom);
    setSalaryTo(salaryRange.salaryTo);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(submitJobFilters({
      industryId,
      salaryFrom,
      salaryTo,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={cn(className, styles.wrapper)}>
      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>
        <ResetFiltersButton onClick={handleResetFilters} disabled={!isReset} />
      </div>
      <div className={styles.body}>
        <IndustryFilter value={industryId} onChange={handleIndustryChange} />
        <SalaryRangeFilter value={{ salaryFrom, salaryTo }} onChange={handleSalaryRangeChange} />
        <button
          type="submit"
          className={styles.applyBtn}
          disabled={!isDirty}
          data-elem="search-button"
        >
          Применить
        </button>
      </div>
    </form>
  );
};