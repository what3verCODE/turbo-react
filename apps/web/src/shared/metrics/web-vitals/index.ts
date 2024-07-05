import {
    onCLS,
    onFCP,
    onLCP,
    onTTFB,
    onINP,
    Metric,
} from 'web-vitals';

type MetricType = 'CLS' | 'FCP' | 'LCP' | 'TTFB' | 'INP';

type Reporter = (type: MetricType, values: Metric) => void;

export function reportWebVitals(reporter: Reporter) {
    onCLS(metric => reporter(metric.name, metric));
    onFCP(metric => reporter(metric.name, metric));
    onLCP(metric => reporter(metric.name, metric));
    onTTFB(metric => reporter(metric.name, metric));
    onINP(metric => reporter(metric.name, metric));
}