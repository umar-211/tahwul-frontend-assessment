/**
 * Mock data for the digital transformation and compliance tracking platform
 */

// Project timeline milestones (dated phases with completion status)
// Only first 2 are completed (green), rest are incomplete (grey) - white dots for completed, red for incomplete
export const projectTimelineMilestones = [
  { date: 'March 17', label: 'Kickoff Workshop', status: 'completed' },
  { date: 'March 18', label: 'Data Collection', status: 'completed' },
  { date: 'May 8', label: 'Initial Phase', status: 'incomplete' },
  { date: 'May 9-July 12', label: 'Verification', status: 'incomplete' },
  { date: 'July 13', label: 'Completion Reviews', status: 'incomplete' },
  { date: 'August 21', label: 'Cycle Conclusion', status: 'incomplete' },
];

// Timeline metric cards (below the milestones) - all icons red per Figma
export const timelineMetrics = [
  { label: 'Overall Progress', value: '78.65%', icon: 'chart', color: 'red' },
  { label: 'Total Criteria', value: '95', icon: 'folder', color: 'red' },
  { label: 'Completed Criteria', value: '52', icon: 'folder-check', color: 'red' },
  { label: 'Evidence Documents', value: '386', icon: 'document-attachment', color: 'red' },
  { label: 'Evidence (Completed)', value: '302', icon: 'document-check', color: 'red' },
  { label: 'Uploaded To DGA', value: '258', icon: 'upload', color: 'red' },
];

// Status legend for Progress Status section (Figma: In Progress = orange)
export const statusLegend = [
  { label: 'Not Started', color: 'gray' },
  { label: 'In Progress', color: 'orange' },
  { label: 'Completed', color: 'green' },
  { label: 'Partially Uploaded', color: 'light-blue' },
  { label: 'Fully Uploaded', color: 'dark-blue' },
  { label: 'Delayed', color: 'red' },
];

// Top performing perspective leaders
export const topPerformingLeaders = [
  { id: '1', name: 'Ahmed Al-Ali', perspective: 'Strategy Perspective', score: 96 },
  { id: '2', name: 'Sarah Al-Khaled', perspective: 'Beneficiary Perspective', score: 94 },
  { id: '3', name: 'Mohammad Al-Mansour', perspective: 'IT Perspective', score: 92 },
];

export const projectTimeline = [
  { stage: 'Initiated', count: 50 },
  { stage: 'In Progress', count: 62 },
  { stage: 'Under Review', count: 83 },
  { stage: 'Completed', count: 112 },
  { stage: 'On Hold', count: 12 },
  { stage: 'Closed', count: 29 },
  { stage: 'Archived', count: 11 },
];

export const dashboardStats = [
  { label: 'Total Projects', value: '798,000', subValue: 'All time', icon: 'folder', color: 'blue' },
  { label: 'Active Projects', value: '50', subValue: 'Currently', icon: 'clock', color: 'blue' },
  { label: 'Overdue', value: '12', subValue: 'Needs attention', icon: 'alert', color: 'red' },
  { label: 'Completed', value: '390', subValue: 'This quarter', icon: 'check', color: 'green' },
  { label: 'In Progress', value: '62', subValue: '', icon: 'progress', color: 'blue' },
  { label: 'Under Review', value: '83', subValue: '', icon: 'review', color: 'yellow' },
  { label: 'Not Started', value: '29', subValue: '', icon: 'circle', color: 'gray' },
];

// Progress Status: each perspective has sections; each section has items (numbered circles by status)
export const perspectivesProgress = [
  {
    id: '1',
    title: 'Strategy And Planning',
    progress: 97.78,
    sections: [
      { name: 'Digital Transformation', items: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
      { name: 'Digital Governance', items: [{ status: 'completed' }, { status: 'completed' }, { status: 'in-progress' }] },
      { name: 'Enterprise Architecture', items: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
    ],
  },
  {
    id: '2',
    title: 'Organization And Culture',
    progress: 70.83,
    sections: [
      { name: 'Digital Culture And Environment', items: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
      { name: 'Leadership Development', items: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
      { name: 'Skills & Capacity Building', items: [{ status: 'in-progress' }, { status: 'in-progress' }, { status: 'in-progress' }] },
    ],
  },
  {
    id: '3',
    title: 'Operations And Execution',
    progress: 80,
    sections: [
      { name: 'Business Processes', items: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'completed' }, { status: 'in-progress' }] },
    ],
  },
  {
    id: '4',
    title: 'Business Continuity',
    progress: 90.59,
    sections: [
      { name: 'Risk Management', items: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
      { name: 'Business Continuity', items: [{ status: 'completed' }, { status: 'not-started' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'not-started' }, { status: 'completed' }] },
    ],
  },
  {
    id: '5',
    title: 'Information Technology',
    progress: 75,
    sections: [
      { name: 'Support Systems', items: [{ status: 'partially-uploaded' }, { status: 'completed' }, { status: 'completed' }, { status: 'partially-uploaded' }, { status: 'completed' }] },
      { name: 'IT Infrastructure', items: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'fully-uploaded' }, { status: 'fully-uploaded' }, { status: 'fully-uploaded' }, { status: 'completed' }] },
      { name: 'Cloud Infrastructure', items: [{ status: 'completed' }, { status: 'fully-uploaded' }, { status: 'fully-uploaded' }] },
    ],
  },
  {
    id: '6',
    title: 'Comprehensive Governance',
    progress: 64.44,
    sections: [
      { name: 'Governance Platforms', items: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'not-started' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
    ],
  },
  {
    id: '7',
    title: 'Channels And Services',
    progress: 100,
    sections: [
      { name: 'Service Quality', items: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
      { name: 'Digital Channels', items: [{ status: 'completed' }, { status: 'completed' }, { status: 'completed' }, { status: 'completed' }] },
    ],
  },
  {
    id: '8',
    title: 'Beneficiary Centralization',
    progress: 60,
    sections: [
      { name: 'User Engagement', items: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }, { status: 'partially-uploaded' }] },
      { name: 'User Relationship', items: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
      { name: 'User Experience', items: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
    ],
  },
  {
    id: '9',
    title: 'Government Data',
    progress: 87.5,
    sections: [
      { name: 'Data Governance', items: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
      { name: 'Data Usage & Availability', items: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
      { name: 'Open Data', items: [{ status: 'completed' }, { status: 'in-progress' }, { status: 'in-progress' }] },
    ],
  },
  {
    id: '10',
    title: 'Research And Innovation',
    progress: 17.65,
    sections: [
      { name: 'Innovation', items: [{ status: 'delayed' }, { status: 'delayed' }, { status: 'delayed' }, { status: 'delayed' }] },
      { name: 'Creative Solutions', items: [{ status: 'in-progress' }, { status: 'delayed' }] },
    ],
  },
];

export const performanceChartData = [
  { month: 'Jan', value: 55 },
  { month: 'Feb', value: 62 },
  { month: 'Mar', value: 58 },
  { month: 'Apr', value: 65 },
  { month: 'May', value: 70 },
  { month: 'Jun', value: 68 },
  { month: 'Jul', value: 72 },
  { month: 'Aug', value: 75 },
  { month: 'Sep', value: 70 },
  { month: 'Oct', value: 78 },
  { month: 'Nov', value: 80 },
  { month: 'Dec', value: 82 },
];

export const teamMembers = [
  { id: '1', name: 'Nora Al-Hamdan', role: 'Lead Auditor', avatar: null },
  { id: '2', name: 'Ahmad Ibrahim', role: 'Compliance Analyst', avatar: null },
  { id: '3', name: 'Sarah Ahmed', role: 'Risk Manager', avatar: null },
  { id: '4', name: 'James Bond', role: 'Product Designer', avatar: null },
  { id: '5', name: 'Sarah Johnson', role: 'Project Lead', avatar: null },
];

export const recentActivities = [
  { id: '1', text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled', time: '5 Mins Ago' },
  { id: '2', text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed', time: '20 Mins Ago' },
  { id: '3', text: 'New Criterion "5.3 Digital Identity" Was Created By Admin', time: '1 Hour Ago' },
  { id: '4', text: "Document 'Strategy_Financial' updated by John Doe", time: '2 hours ago' },
  { id: '5', text: "Audit 'HR Compliance Q1' initiated", time: '4 hours ago' },
];

export const auditReadiness = {
  percentage: 80,
  overdueItems: 12,
  missingEvidence: 5,
  completed: 8,
  inProgress: 4,
};

// Overall compliance score (Basic Standards)
export const overallComplianceScore = {
  percentage: 65,
  label: 'Basic Standards 2025',
};

export const overallPerformance = 65;

// Details page - Strategic Planning project (second screen)
export const projectDetails = {
  id: 'digital-transformation',
  title: 'Digital Transformation Strategic Planning',
  category: 'Strategy & Planning',
  subtitle: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  progress: 100,
  breadcrumb: ['Projects', 'Digital Transformation Strategic Planning'],
  evidenceSummary: {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
  },
  objective: "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
  implementationRequirements: `Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:
A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.
B. Strategic Initiatives, Programs, And Performance Indicators.
C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.
D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.`,
  evidenceDocumentsText: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
  relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
  scope: 'All Government Entities.',
  implementationApproach: [
    'Conduct current state assessment and gap analysis',
    'Define digital transformation roadmap with prioritized initiatives',
    'Establish governance and change management frameworks',
    'Implement pilot projects and scale successful solutions',
    'Monitor KPIs and iterate based on feedback',
  ],
  guidingPrinciples: [
    'User-centric design and experience',
    'Data-driven decision making',
    'Agile and iterative delivery',
    'Security and compliance by design',
    'Sustainable and scalable solutions',
  ],
  successCriteria: 'Achievement of 80% adoption of new digital tools within 12 months, measurable improvement in process efficiency (target: 30% reduction in manual effort), and positive feedback from stakeholders (target: 4.0/5.0 satisfaction score).',
  leaders: [
    { id: '1', name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: null },
    { id: '2', name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: null },
  ],
};

export const evidenceDocuments = [
  { id: '1', title: 'Strategy Document v2.1', owner: 'Ahmed Al-Mansoori', date: '2025-02-01', status: 'completed', time: '05:00 PM' },
  { id: '2', title: 'Implementation Roadmap', owner: 'Nora Al-Hamdan', date: '2025-01-28', status: 'in-progress', time: '02:30 PM' },
  { id: '3', title: 'Risk Assessment Report', owner: 'Ayman Ali', date: '2025-01-25', status: 'under-review', time: '11:00 AM' },
  { id: '4', title: 'Stakeholder Analysis', owner: 'Sarah Ahmed', date: '2025-01-20', status: 'pending', time: '09:15 AM' },
  { id: '5', title: 'Budget Proposal Q1', owner: 'Ahmed Al-Mansoori', date: '2025-01-15', status: 'completed', time: '04:45 PM' },
];

// Perspectives page - Digital Transformation Strategy Meeting
export const perspectiveMeeting = {
  id: 'digital-transformation-strategy',
  title: 'Digital Transformation Strategy Meeting',
  category: 'Strategy & Planning',
  subtitle: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
  progress: 100,
  status: 'approved',
  evidenceSummary: {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
  },
  stats: { totalProjects: 4, pending: 3, overdue: 3, approved: 1, rejected: 1 },
  summary: 'This initiative outlines the strategic approach for digital transformation across the organization. It encompasses technology adoption, process modernization, and cultural change to achieve sustainable growth and improved operational efficiency. Key focus areas include infrastructure upgrades, data governance, and digital service delivery.',
  implementationSteps: 'The methodology follows a phased approach: (1) Discovery and assessment of current state, (2) Definition of target architecture and roadmap, (3) Pilot implementation with selected business units, (4) Scaling and rollout with change management, (5) Continuous monitoring and optimization. Agile and iterative delivery is applied throughout.',
  deliverables: 'Stakeholder analysis report, Digital transformation roadmap, Technology assessment, Implementation plan with milestones, Change management framework, KPI dashboard and reporting structure.',
  audit: 'Internal audit has reviewed the strategy alignment with organizational goals. Compliance check completed for data governance and security standards. External review scheduled for Q2.',
  objective: "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
  implementationRequirements: `Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:
A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.
B. Strategic Initiatives, Programs, And Performance Indicators.
C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.
D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.`,
  evidenceDocumentsText: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
  relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
  scope: 'All Government Entities.',
  leaders: [
    { id: '1', name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: null },
    { id: '2', name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: null },
  ],
  assignedTo: [
    { id: '1', name: 'Phillip K. Johnson' },
    { id: '2', name: 'Susan B. Martin' },
  ],
  createdBy: [
    { id: '1', name: 'Preston M. Reid' },
  ],
};

// Screen 3 Evidence tab: documents table, comments, recent activities
export const perspectiveEvidenceDocuments = [
  { id: '1', documentNumber: '5.4.1.1', documentName: 'Digital_Transformation_Plan.Pdf', documentLead: 'Ahmed Khaled', documentPreparer: 'Ahmed Khaled', date: '2025-08-01', dueDate: '2025-08-01', status: 'approved' },
  { id: '2', documentNumber: '5.4.1.2', documentName: 'KPI_Framework.Xlsx', documentLead: 'Mona Hamed', documentPreparer: 'Mona Hamed', date: '2025-08-01', dueDate: '2025-08-01', status: 'pending-review' },
  { id: '3', documentNumber: '5.4.1.3', documentName: 'Roadmap_Version1.Docx', documentLead: 'Rami AlSharif', documentPreparer: 'Rami AlSharif', date: '2025-08-01', dueDate: '2025-08-01', status: 'pending-review' },
];

export const perspectiveEvidenceComments = [
  { id: '1', authorName: 'Sara Ibrahim', date: '2025-08-05', text: 'Ensure The Plan Includes A Clear Governance Model.' },
  { id: '2', authorName: 'Mona Hamed', date: '2025-08-05', text: 'Ensure The Plan Includes A Clear Governance Model.' },
];

export const perspectiveEvidenceActivities = [
  { id: '1', text: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif', time: '5 Mins Ago' },
  { id: '2', text: 'KPI_Framework.Xlsx Uploaded By Mona Hamed', time: '20 Mins Ago' },
  { id: '3', text: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team', time: '1 Hour Ago' },
];

export const perspectiveTimelineProjects = [
  { id: '1', overallStatus: '3.1.1', priority: 'High', projectName: 'Project Alpha', assignTo: 'John Doe', currentStatus: 'in-progress', dueDate: '2024-12-31', expectedValue: '$100,000' },
  { id: '2', overallStatus: '3.2.1', priority: 'Medium', projectName: 'Project Beta', assignTo: 'Maria Smith', currentStatus: 'complete', dueDate: '2024-06-30', expectedValue: '$75,000' },
  { id: '3', overallStatus: '3.3.1', priority: 'High', projectName: 'Project Gamma', assignTo: 'Ahmed Ali', currentStatus: 'overdue', dueDate: '2024-09-15', expectedValue: '$120,000' },
];

export const perspectiveRecentActivities = [
  { id: '1', text: "Creating 'dashboard' data sheet" },
  { id: '2', text: 'Edit data and chart configuration' },
];
