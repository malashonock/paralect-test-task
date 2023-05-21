import { useEffect, useState } from 'react';

import { JobQueryState } from 'reducers/search';

export const useIsDirty = (currentState: JobQueryState, submittedState: JobQueryState): boolean => {
  const [isDirty, setIsDirty] = useState(false);
  
  useEffect(() => {
    if (submittedState.jobQuery !== currentState.jobQuery) {
      if (!isDirty) setIsDirty(true);
    } else {
      if (isDirty) setIsDirty(false);
    }
  }, [
    currentState.jobQuery,
    submittedState.jobQuery,
  ]);

  return isDirty;
}