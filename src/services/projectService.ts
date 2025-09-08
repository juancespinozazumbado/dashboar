export interface SprintInfo {
  startDate: string;
  endDate: string;
}

export interface Project {
  id: number;
  name: string;
  status: string;
  progress: number;
  startDate: string | null;
  endDate: string | null;
  completionYear: number | null;
}

export interface DashboardData {
  sprintInfo: SprintInfo;
  projects: Project[];
}

export async function fetchDashboardData(): Promise<DashboardData> {
  const response = await fetch('/mockDatabase.json');
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }
  return await response.json();
}
