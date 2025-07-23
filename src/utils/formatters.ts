// Utility functions for data formatting and calculations

export function formatNumber(num: number): string {
  if (num === 0) return '-';
  return new Intl.NumberFormat('de-DE').format(Math.round(num));
}

export function formatPercentage(num: number): string {
  return `${num.toFixed(1)}%`;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('de-DE');
}

export function calculateParticipationClass(participation: number): string {
  if (participation >= 80) return 'participation-good';
  if (participation >= 50) return 'participation-warning';
  return 'participation-poor';
}

export function calculateTrendClass(trend: string): string {
  switch (trend) {
    case 'Rising': return 'trend-positive';
    case 'Falling': return 'trend-negative';
    case 'Stable': return 'trend-stable';
    default: return '';
  }
}

export function sortByKey<T>(array: T[], key: keyof T, ascending: boolean = false): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return ascending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return ascending ? aVal - bVal : bVal - aVal;
    }
    
    return 0;
  });
}

export function filterByName<T extends { name: string }>(
  array: T[], 
  searchTerm: string
): T[] {
  if (!searchTerm) return array;
  const term = searchTerm.toLowerCase();
  return array.filter(item => item.name.toLowerCase().includes(term));
}

export function exportToCsv(data: any[], filename: string): void {
  const headers = Object.keys(data[0] || {});
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => {
        const value = row[header];
        return typeof value === 'string' && value.includes(',') 
          ? `"${value}"` 
          : value;
      }).join(',')
    )
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}
