import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'
import { remoteBlock } from '../../remotes'
import meta from '../../metadata.json'

const Block = lazy(remoteBlock)

const Telemetry: FC = () => (
  <>
    <title>{meta['/hive/telemetry'].title}</title>
    <meta name="description" content={meta['/hive/telemetry'].description} />

    <Block article content>
      <h1>Telemetry</h1>
      <p>In order to stay aligned with Cloud Native efforts, Hive<sup>io</sup> has integrated with <Link to='https://opentelemetry.io' target='_blank' rel='noopener noreferrer'>OpenTelemetry</Link> to provide built-in logging, tracing, and metrcs if enabled. OpenTelemetry has stated that it is suitable for use in its current phase of development. We have followed their implementation guidelines to provide flexible integration with their API allowing you to extend that functionality in your code.</p>

      <h2 id='about'>About</h2>
      <p>OpenTelemetry defines itself as an observability framework that provides the tools you need to capture information on how your services perform in the environments they are deployed. To use their own words:</p>
      <blockquote>
        <p>OpenTelemetry is composed of the following:</p>
        <ul>
          <li>One API and SDK per language, which include the interfaces and implementations that define and create distributed traces and metrics, manage sampling and context propagation, etc.</li>
          <li>Language-specific integrations for popular web frameworks, storage clients, RPC libraries, etc. that (when enabled) automatically capture relevant traces and metrics and handle context propagation</li>
          <li>Automatic instrumentation agents that can collect telemetry from some applications without requiring code changes</li>
          <li>Language-specific exporters that allow SDKs to send captured traces and metrics to any supported backends</li>
          <li>The OpenTelemetry Collector, which can collect data from OpenTelemetry SDKs and other sources, and then export this telemetry to any supported backend</li>
        </ul>
        <p>OpenTelemetry is a <Link to='https://www.cncf.io/sandbox-projects/' target='_blank' rel='noopener noreferrer'>CNCF Sandbox</Link> member, formed through a merger of the <Link to='https://www.opentracing.io/' target='_blank' rel='noopener noreferrer'>OpenTracing</Link> and <Link to='https://www.opencensus.io/' target='_blank' rel='noopener noreferrer'>OpenCensus</Link> projects.</p>
        <p>- <Link to='https://opentelemetry.io/about/#what-is-an-observability-framework' target='_blank' rel='noopener noreferrer'>OpenTelemetry</Link></p>
      </blockquote>

      <h2 id='concepts'>Concepts</h2>
      <p>OpenTelemetry combines existing concepts and introduces some new ones to create the comprehensive solution they provide. They define these as such:</p>
      <blockquote>
        <p>In software, observability typically refers to telemetry produced by <strong>services</strong> and is often divided into three major verticals:</p>
        <ul>
          <li><Link to='https://opentelemetry.io/docs/concepts/data-sources/#traces' target='_blank' rel='noopener noreferrer'><strong>Tracing</strong></Link>, aka <strong>distributed tracing</strong>, provides insight into the full lifecycles, aka <em>traces</em>, of requests to the system, allowing you to pinpoint failures and performance issues.</li>
          <li><Link to='https://opentelemetry.io/docs/concepts/data-sources/#metrics' target='_blank' rel='noopener noreferrer'><strong>Metrics</strong></Link> provide quantitative information about processes running inside the system, including counters, gauges, and histograms.</li>
          <li><Link to='https://en.wikipedia.org/wiki/Log_file' target='_blank' rel='noopener noreferrer'><strong>Logging</strong></Link> provides insight into application-specific messages emitted by processes.</li>
        </ul>
        <p>These verticals are tightly interconnected. <strong>Metrics</strong> can be used to pinpoint, for example, a subset of misbehaving <strong>traces</strong>. <strong>Logs</strong> associated with those traces could help to find the root cause of this behavior. And then new <strong>metrics</strong> can be configured, based on this discovery, to catch this issue earlier next time. Other verticals exist (continuous profiling, production debugging, etc.), however traces, metrics, and logs are the three most well adopted across the industry.</p>
        <p>- <Link to='https://opentelemetry.io/about/#what-is-observability' target='_blank' rel='noopener noreferrer'>OpenTelemetry</Link></p>
      </blockquote>

      <h2 id='architecture'>Architecture</h2>
      <p>Apart from the previously mentioned components of the solution, which are built into Hive<sup>io</sup> specialized containers, OpenTelemetry provides a Collector that receives data from the traces and metrics generated and export to your choice of supporting services such as <Link to='https://zipkin.io/' target='_blank' rel='noopener noreferrer'>Zipkin</Link>, <Link to='https://prometheus.io/' target='_blank' rel='noopener noreferrer'>Prometheus</Link>, and a <Link to='https://opentelemetry.io/registry/?s=exporter' target='_blank' rel='noopener noreferrer'>registry</Link> with much more.</p>
      <blockquote>
        <p>The Collector provides a single binary and two deployment methods:</p>
        <ul>
          <li>An agent running with the application or on the same host as the application (e.g. binary, sidecar, or daemonset).</li>
          <li>A gateway running as a standalone service (e.g. container or deployment) typically per cluster, datacenter or region.</li>
        </ul>
        <p>- <Link to='https://opentelemetry.io/docs/collector/getting-started/' target='_blank' rel='noopener noreferrer'>OpenTelemetry</Link></p>
      </blockquote>
      <p>Once your deployment method is defined, the Collector needs to be <Link to='https://opentelemetry.io/docs/collector/configuration/' target='_blank' rel='noopener noreferrer'>configured</Link> to integrate with the supporting services previously mentioned. Check out the examples in the next section to get an idea on basic configurations.</p>
    </Block>
  </>
)
export default Telemetry
