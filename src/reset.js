function resetFiltersBasedOnRules(resetKeys) {
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.push([
      'cmsfilter',
      (filterInstances) => {
        const [filterInstance] = filterInstances;
  
        // Call the resetFilters method, passing in the resetKeys
        filterInstance.resetFilters(resetKeys).then(() => {
          console.log('Filters reset successfully');
        });
      },
    ]);
  }
  
  export { resetFiltersBasedOnRules };
  