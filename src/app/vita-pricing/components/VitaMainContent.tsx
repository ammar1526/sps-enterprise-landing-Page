"use client";

import { useMemo, useState } from "react";
import {
  Users,
  UserPlus,
  Package,
  Layers,
  ServerCog,
  Search,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  type LucideIcon,
} from "lucide-react";

type Align = "left" | "right" | "center";

interface ColumnDef {
  key: string;
  label: string;
  align?: Align;
  mono?: boolean;
  sortValue?: (row: Record<string, unknown>) => string | number;
  render?: (row: Record<string, unknown>) => React.ReactNode;
  minWidth?: string;
}

interface TabConfig {
  key: string;
  label: string;
  icon: LucideIcon;
  rows: Record<string, unknown>[];
  columns: ColumnDef[];
}

const cx = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(" ");

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

function TypePill({ value }: { value?: string }) {
  if (!value) return <span className="text-gray-300">&mdash;</span>;
  const isCloud = value.toLowerCase() === "cloud";
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium capitalize tracking-wide",
        isCloud
          ? "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200"
          : "bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-200",
      )}
    >
      {value.replace("_", "-")}
    </span>
  );
}

function ServiceTypePill({ value }: { value?: string }) {
  if (!value) return <span className="text-gray-300">&mdash;</span>;
  return (
    <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-medium text-green-700 ring-1 ring-inset ring-green-200">
      {value}
    </span>
  );
}

function DiscountPill({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 font-mono text-[12px] font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
      -{value.toFixed(2)}%
    </span>
  );
}

const laborRateRows = [
  {
    category: "Business Analyst",
    position: "Business Analyst",
    description: "Analyst 1",
    rate: 98.22,
  },
  {
    category: "Business Analyst",
    position: "Business Analyst",
    description: "Analyst 2",
    rate: 112.78,
  },
  {
    category: "Business Analyst",
    position: "Business Analyst",
    description: "Analyst 3",
    rate: 118.77,
  },
  {
    category: "Business Analyst",
    position: "Business Analyst",
    description: "Analyst 4",
    rate: 123.76,
  },
  {
    category: "Business Analyst",
    position: "Business Analyst",
    description: "Analyst 5",
    rate: 134.74,
  },
  {
    category: "ERP Analyst",
    position: "ERP Analyst",
    description: "ERP Analyst 1",
    rate: 123.76,
  },
  {
    category: "ERP Analyst",
    position: "ERP Analyst",
    description: "ERP Analyst 2",
    rate: 128.75,
  },
  {
    category: "ERP Analyst",
    position: "ERP Analyst",
    description: "ERP Analyst 3",
    rate: 134.74,
  },
  {
    category: "ERP Analyst",
    position: "ERP Analyst",
    description: "ERP Analyst 4",
    rate: 140.72,
  },
  {
    category: "ERP Analyst",
    position: "ERP Analyst",
    description: "ERP Analyst 5",
    rate: 146.72,
  },
  {
    category: "Project Manager",
    position: "Project Manager",
    description: "PM 1",
    rate: 128.4,
  },
  {
    category: "Project Manager",
    position: "Project Manager",
    description: "PM 2",
    rate: 141.15,
  },
];

const additionalLaborRows = [
  {
    position: "Software Development Intern (Offshore)",
    description: "Junior Intern",
    rate: 18.0,
  },
  {
    position: "Software Development Intern (Offshore)",
    description: "Senior Intern",
    rate: 28.0,
  },
  {
    position: "Software Development",
    description: "Associate Developer",
    rate: 48.0,
  },
  {
    position: "Software Development",
    description: "Associate Developer - Full Stack",
    rate: 54.0,
  },
  {
    position: "Software Development",
    description: "Junior Developer",
    rate: 58.0,
  },
  { position: "Software Development", description: "Developer", rate: 69.0 },
  {
    position: "Software Development",
    description: "Senior Developer",
    rate: 79.0,
  },
  {
    position: "Software Development",
    description: "Senior Designer",
    rate: 79.0,
  },
  {
    position: "Software Development",
    description: "Product Owner",
    rate: 89.0,
  },
  { position: "Software Development", description: "Architect", rate: 99.0 },
];

const softwareTitleRows = [
  {
    part: "D02K6ZX",
    description:
      "IBM Rational Test Automation Server Basic Floating User Single Install License + SW Subscription & Support 12 Months",
    list: 3423.0,
    discount: 3.5,
    final: 2338.2,
    type: "on_prem",
  },
  {
    part: "D02KJZX",
    description:
      "IBM Rational Test Automation Server Basic Floating User Single Install SW Subscription & Support Reinstatement 12 Months",
    list: 1454.0,
    discount: 3.5,
    final: 1403.11,
    type: "on_prem",
  },
  {
    part: "D02KLZX",
    description:
      "IBM Rational Test Automation Server Basic Floating User Single Install from IBM Z License + SW Subscription & Support 12 Months",
    list: 2423.0,
    discount: 3.5,
    final: 2338.2,
    type: "on_prem",
  },
  {
    part: "D02KPZX",
    description:
      "IBM Rational Test Automation Server Basic Floating User Single Install from IBM Z SW Subscription & Support Reinstatement 12 Months",
    list: 1454.0,
    discount: 3.5,
    final: 1403.11,
    type: "on_prem",
  },
  {
    part: "D02KQZX",
    description:
      "IBM Rational Test Automation Server Professional Floating User Single Install from Rational Performance Tester Floating User Single Install Trade Up License + SW Subscription & Support",
    list: 20910.0,
    discount: 3.5,
    final: 20178.15,
    type: "on_prem",
  },
  {
    part: "D55Q1LL",
    description:
      "IBM WebSphere Application Server Network Deployment Processor Value Unit (PVU) License + SW Subscription & Support 12 Months",
    list: 4850.0,
    discount: 3.5,
    final: 4680.25,
    type: "on_prem",
  },
  {
    part: "D0Y2GLL",
    description:
      "IBM Db2 Advanced Edition Virtual Processor Core License + SW Subscription & Support 12 Months",
    list: 9600.0,
    discount: 3.5,
    final: 9264.0,
    type: "on_prem",
  },
  {
    part: "BS1V4LL",
    description:
      "IBM Cognos Analytics Explorer Authorized User SaaS Subscription 12 Months",
    list: 612.0,
    discount: 3.5,
    final: 590.58,
    type: "cloud",
  },
  {
    part: "D1YZ8LL",
    description:
      "IBM SPSS Statistics Base Concurrent User License + SW Subscription & Support 12 Months",
    list: 1180.0,
    discount: 3.5,
    final: 1138.7,
    type: "on_prem",
  },
  {
    part: "E0Y3ALL",
    description:
      "IBM FileNet Content Manager Standard Edition PVU SaaS Subscription 12 Months",
    list: 2760.0,
    discount: 3.5,
    final: 2663.4,
    type: "cloud",
  },
  {
    part: "D0Y4KLL",
    description:
      "IBM DataPower Gateway X2 Appliance License + SW Subscription & Support 12 Months",
    list: 15400.0,
    discount: 3.5,
    final: 14861.0,
    type: "on_prem",
  },
  {
    part: "E0Y5BLL",
    description:
      "IBM InfoSphere Information Server Enterprise Edition PVU SaaS Subscription 12 Months",
    list: 3320.0,
    discount: 3.5,
    final: 3203.8,
    type: "cloud",
  },
];

const supplierOptionRows = [
  {
    supplier: "IBM WebSphere",
    description: "Deployment Services (per node)",
    rate: 47000.0,
    hours: "Firm fixed",
    serviceType: "",
  },
  {
    supplier: "IBM WebSphere",
    description: "Administration Services",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    supplier: "IBM WebSphere",
    description: "Health Check Service",
    rate: 3000.0,
    hours: "Firm fixed",
    serviceType: "",
  },
  {
    supplier: "IBM WebSphere",
    description: "Application Modernization",
    rate: 12000.0,
    hours: "Firm fixed, per application",
    serviceType: "",
  },
  {
    supplier: "IBM WebSphere",
    description: "High Availability & Clustering",
    rate: 62000.0,
    hours: "Firm fixed",
    serviceType: "",
  },
  {
    supplier: "IBM WebSphere",
    description: "Monitoring Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    supplier: "IBM WebSphere",
    description: "Upgrade WAS to v9.x",
    rate: 38950.0,
    hours: "Firm fixed",
    serviceType: "",
  },
  {
    supplier: "IBM WebSphere",
    description: "Upgrade to IBM Cloud Pak for Applications",
    rate: 60000.0,
    hours: "Firm fixed",
    serviceType: "",
  },
  {
    supplier: "IBM WebSphere",
    description: "Training (per day)",
    rate: 1200.0,
    hours: "Firm fixed",
    serviceType: "",
  },
  {
    supplier: "IBM Db2",
    description: "Deployment Service (per node)",
    rate: 27000.0,
    hours: "Firm fixed",
    serviceType: "",
  },
  {
    supplier: "IBM Db2",
    description: "Administration Services",
    rate: 3200.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    supplier: "IBM Cognos",
    description: "Health Check Service",
    rate: 3400.0,
    hours: "Firm fixed",
    serviceType: "",
  },
];

const managedServiceRows = [
  {
    description: "IBM WebSphere System Admin as a Service",
    rate: 4000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    description: "IBM DB2 System Admin as a Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    description: "IBM Informix System Admin as a Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    description: "IBM Spectrum System Admin as a Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    description: "IBM Cognos System Admin as a Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    description: "IBM SPSS System Admin as a Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    description: "IBM DataCap System Admin as a Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    description: "IBM Datapower System Admin as a Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    description: "IBM FileNet System Admin as a Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
  {
    description: "IBM Infosphere System Admin as a Service",
    rate: 3000.0,
    hours: "Monthly, Firm fixed per instance",
    serviceType: "Managed Service",
  },
];

const TABS: TabConfig[] = [
  {
    key: "labor",
    label: "Labor Rate",
    icon: Users,
    rows: laborRateRows,
    columns: [
      { key: "category", label: "Job Category", minWidth: "10rem" },
      { key: "position", label: "Position", minWidth: "12rem" },
      { key: "description", label: "Description", minWidth: "10rem" },
      {
        key: "rate",
        label: "Bill Rate",
        align: "right",
        mono: true,
        sortValue: (r) => r.rate as number,
        render: (r) => formatCurrency(r.rate as number),
      },
    ],
  },
  {
    key: "additionalLabor",
    label: "Additional Labor",
    icon: UserPlus,
    rows: additionalLaborRows,
    columns: [
      { key: "position", label: "Position Name", minWidth: "16rem" },
      { key: "description", label: "Description", minWidth: "12rem" },
      {
        key: "rate",
        label: "Bill Rate",
        align: "right",
        mono: true,
        sortValue: (r) => r.rate as number,
        render: (r) => formatCurrency(r.rate as number),
      },
    ],
  },
  {
    key: "software",
    label: "Software Titles",
    icon: Package,
    rows: softwareTitleRows,
    columns: [
      { key: "part", label: "Part Number", mono: true, minWidth: "8rem" },
      { key: "description", label: "Part Description", minWidth: "22rem" },
      {
        key: "list",
        label: "IBM Price List",
        align: "right",
        mono: true,
        sortValue: (r) => r.list as number,
        render: (r) => formatCurrency(r.list as number),
      },
      {
        key: "discount",
        label: "BAFO Discount",
        align: "right",
        sortValue: (r) => r.discount as number,
        render: (r) => <DiscountPill value={r.discount as number} />,
      },
      {
        key: "final",
        label: "Final Price",
        align: "right",
        mono: true,
        sortValue: (r) => r.final as number,
        render: (r) => (
          <span className="font-semibold text-[#0B2545]">
            {formatCurrency(r.final as number)}
          </span>
        ),
      },
      {
        key: "type",
        label: "Type",
        align: "center",
        sortValue: (r) => r.type as string,
        render: (r) => <TypePill value={r.type as string} />,
      },
    ],
  },
  {
    key: "suppliers",
    label: "Supplier Options",
    icon: Layers,
    rows: supplierOptionRows,
    columns: [
      { key: "supplier", label: "Supplier Name", minWidth: "10rem" },
      { key: "description", label: "Description", minWidth: "16rem" },
      {
        key: "rate",
        label: "Rate",
        align: "right",
        mono: true,
        sortValue: (r) => r.rate as number,
        render: (r) => formatCurrency(r.rate as number),
      },
      { key: "hours", label: "Hours", minWidth: "13rem" },
      {
        key: "serviceType",
        label: "Service Type",
        align: "center",
        sortValue: (r) => r.serviceType as string,
        render: (r) => <ServiceTypePill value={r.serviceType as string} />,
      },
    ],
  },
  {
    key: "managed",
    label: "Managed Services",
    icon: ServerCog,
    rows: managedServiceRows,
    columns: [
      { key: "description", label: "Description", minWidth: "18rem" },
      {
        key: "rate",
        label: "Rate",
        align: "right",
        mono: true,
        sortValue: (r) => r.rate as number,
        render: (r) => formatCurrency(r.rate as number),
      },
      { key: "hours", label: "Hours", minWidth: "13rem" },
      {
        key: "serviceType",
        label: "Service Type",
        align: "center",
        sortValue: (r) => r.serviceType as string,
        render: (r) => <ServiceTypePill value={r.serviceType as string} />,
      },
    ],
  },
];

const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export default function PricingCatalog() {
  const [activeKey, setActiveKey] = useState(TABS[0].key);
  const [query, setQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const activeTab = TABS.find((t) => t.key === activeKey)!;

  const selectTab = (key: string) => {
    setActiveKey(key);
    setQuery("");
    setPage(1);
    setSort(null);
  };

  const filteredRows = useMemo(() => {
    if (!query.trim()) return activeTab.rows;
    const q = query.trim().toLowerCase();
    return activeTab.rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value ?? "")
          .toLowerCase()
          .includes(q),
      ),
    );
  }, [activeTab, query]);

  const sortedRows = useMemo(() => {
    if (!sort) return filteredRows;
    const column = activeTab.columns.find((c) => c.key === sort.key);
    const getValue =
      column?.sortValue ?? ((r: Record<string, unknown>) => r[sort.key]);
    const copy = [...filteredRows];
    copy.sort((a, b) => {
      const va = getValue(a);
      const vb = getValue(b);
      if (typeof va === "number" && typeof vb === "number") {
        return sort.direction === "asc" ? va - vb : vb - va;
      }
      const sa = String(va ?? "").toLowerCase();
      const sb = String(vb ?? "").toLowerCase();
      if (sa < sb) return sort.direction === "asc" ? -1 : 1;
      if (sa > sb) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
    return copy;
  }, [filteredRows, sort, activeTab]);

  const totalEntries = sortedRows.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / pageSize));
  const safePage = Math.min(page, totalPages);
  const startIndex = totalEntries === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const endIndex = Math.min(safePage * pageSize, totalEntries);
  const pageRows = sortedRows.slice(
    (safePage - 1) * pageSize,
    (safePage - 1) * pageSize + pageSize,
  );

  const toggleSort = (key: string) => {
    setSort((prev) => {
      if (!prev || prev.key !== key) {
        return { key, direction: "asc" };
      }
      if (prev.direction === "asc") {
        return { key, direction: "desc" };
      }
      return null;
    });
  };

  const pageNumbers = useMemo(() => {
    const pages: Array<number | "ellipsis"> = [];
    const windowSize = 1;
    for (let p = 1; p <= totalPages; p++) {
      if (p === 1 || p === totalPages || Math.abs(p - safePage) <= windowSize) {
        pages.push(p);
      } else if (pages[pages.length - 1] !== "ellipsis") {
        pages.push("ellipsis");
      }
    }
    return pages;
  }, [totalPages, safePage]);

  return (
    <section id="vita-pricing-catalog" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {activeTab.label}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              View and search {activeTab.label.toLowerCase()} pricing details.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-4">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.key === activeKey;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => selectTab(tab.key)}
                className={cx(
                  "flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-[#4F46E5] text-white shadow-md shadow-indigo-500/20 rounded-lg"
                    : "text-gray-600 hover:bg-gray-100 rounded-lg",
                )}
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
                {tab.label}
                <span
                  className={cx(
                    "ml-1 rounded-full px-2 py-0.5 text-[11px] font-mono",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-200 text-gray-600",
                  )}
                >
                  {tab.rows.length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between bg-gray-50/50">
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                Show
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setPage(1);
                  }}
                  className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  {PAGE_SIZE_OPTIONS.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                entries
              </label>
            </div>

            <div className="relative flex-1 sm:max-w-xs w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 bg-white py-1.5 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {activeTab.columns.map((col) => {
                    const isSorted = sort?.key === col.key;
                    return (
                      <th
                        key={col.key}
                        scope="col"
                        style={{ minWidth: col.minWidth }}
                        className={cx(
                          "px-6 py-3 text-[11px] font-semibold uppercase tracking-wider text-gray-600 select-none",
                          col.align === "right" && "text-right",
                          col.align === "center" && "text-center",
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => toggleSort(col.key)}
                          className={cx(
                            "inline-flex items-center gap-1.5 hover:text-gray-900",
                            col.align === "right" &&
                              "flex-row-reverse justify-end w-full",
                            col.align === "center" && "mx-auto",
                          )}
                        >
                          {col.label}
                          {isSorted ? (
                            sort!.direction === "asc" ? (
                              <ChevronUp className="h-3.5 w-3.5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
                            )
                          ) : (
                            <ChevronsUpDown className="h-3.5 w-3.5 text-gray-300" />
                          )}
                        </button>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pageRows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={activeTab.columns.length}
                      className="px-6 py-16 text-center"
                    >
                      <div className="flex flex-col items-center gap-2 text-gray-400">
                        <Inbox className="h-8 w-8" strokeWidth={1.25} />
                        <p className="text-sm font-medium text-gray-500">
                          No matching rows
                        </p>
                        <p className="text-xs">Try a different search term.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  pageRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={cx(
                        "transition-colors",
                        idx % 2 === 1 ? "bg-gray-50/60" : "bg-white",
                      )}
                    >
                      {activeTab.columns.map((col) => {
                        const cellValue = row[col.key];
                        return (
                          <td
                            key={col.key}
                            className={cx(
                              "px-6 py-4 align-middle text-gray-700",
                              col.align === "right" && "text-right",
                              col.align === "center" && "text-center",
                              col.mono && "font-mono text-[13px] text-gray-800",
                            )}
                          >
                            {col.render ? (
                              col.render(row)
                            ) : cellValue !== undefined &&
                              cellValue !== null &&
                              cellValue !== "" &&
                              (typeof cellValue === "string" ||
                                typeof cellValue === "number") ? (
                              String(cellValue)
                            ) : (
                              <span className="text-gray-300">&mdash;</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between bg-gray-50/50">
            <p className="text-sm text-gray-600">
              {totalEntries === 0
                ? "No entries to show"
                : `Showing ${startIndex} to ${endIndex} of ${totalEntries} entries`}
            </p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>
              {pageNumbers.map((p, i) =>
                p === "ellipsis" ? (
                  <span key={`e-${i}`} className="px-2 text-gray-400">
                    &hellip;
                  </span>
                ) : (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPage(p)}
                    className={cx(
                      "h-8 w-8 rounded-md text-sm font-medium transition",
                      p === safePage
                        ? "bg-[#4F46E5] text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100",
                    )}
                  >
                    {p}
                  </button>
                ),
              )}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 disabled:pointer-events-none disabled:opacity-40"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
