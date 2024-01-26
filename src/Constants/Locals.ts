type TRelativeTime = Partial<{
  future: string;
  past: string;
  ss: string;
  s: string;
  m: string;
  mm: string;
  h: string;
  hh: string;
  d: string;
  dd: string;
  M: string;
  MM: string;
  y: string;
  yy: string;
}>;

export const EN_RELATIVE_TIME: TRelativeTime = {
  future: "%s seconds.",
  past: "%s seonds ago.",
  s: "1 second.",
  ss: "%s seconds.",
  m: "1 minute.",
  mm: "%d minutes.",
  h: "1 hour.",
  hh: "%d hours.",
  d: "1 day.",
  dd: "%d days.",
  M: "1 month.",
  MM: "%d months.",
  y: "1 year.",
  yy: "%d years.",
};

export const VI_RELATIVE_TIME: TRelativeTime = {
  future: "%s giây.",
  past: "%s giây.",
  s: "1 giây.",
  ss: "%s giây.",
  m: "1 phút.",
  mm: "%d phút.",
  h: "1 giờ.",
  hh: "%d giờ.",
  d: "1 ngày.",
  dd: "%d ngày.",
  M: "1 tháng.",
  MM: "%d tháng.",
  y: "1 năm.",
  yy: "%d năm.",
};
