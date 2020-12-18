import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import { Header } from 'layout'

import AsideMenu from '../AsideMenu'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Overview extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/telemetry'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/telemetry']

    return (
      <>
        <Header title={`${meta.common.siteName} | ${title}`} description={description} url={url} />

        <article className='section is-medium'>
          <Container>
            <div className='columns'>
              <header className='column is-narrow is-hidden-touch'>
                <AsideMenu />
              </header>
              <section className='column content' role='document'>
                <h1>Telemetry</h1>
                <p>In order to stay aligned with Cloud Native efforts, Hive<sup>io</sup> has integrated with <a href='https://opentelemetry.io' target='_blank' rel='noopener noreferrer'>OpenTelemetry</a> to provide built-in logging, tracing, and metrcs if enabled. OpenTelemetry has stated that it is suitable for use in its current phase of development. We have followed their implementation guidelines to provide flexible integration with their API allowing you to extend that functionality in your code.</p>
                <h2>About</h2>
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
                  <p>OpenTelemetry is a <a href='https://www.cncf.io/sandbox-projects/' target='_blank' rel='noopener noreferrer'>CNCF Sandbox</a> member, formed through a merger of the <a href='https://www.opentracing.io/' target='_blank' rel='noopener noreferrer'>OpenTracing</a> and <a href='https://www.opencensus.io/' target='_blank' rel='noopener noreferrer'>OpenCensus</a> projects.</p>
                  <p>- <a href='https://opentelemetry.io/about/#what-is-an-observability-framework' target='_blank' rel='noopener noreferrer'>OpenTelemetry</a></p>
                </blockquote>

                <h2>Concepts</h2>
                <p>OpenTelemetry combines existing concepts and introduces some new ones to create the comprehensive solution they provide. They define these as such:</p>
                <blockquote>
                  <p>In software, observability typically refers to telemetry produced by <strong>services</strong> and is often divided into three major verticals:</p>
                  <ul>
                    <li><a href='https://opentelemetry.io/docs/concepts/data-sources/#traces' target='_blank' rel='noopener noreferrer'><strong>Tracing</strong></a>, aka <strong>distributed tracing</strong>, provides insight into the full lifecycles, aka <em>traces</em>, of requests to the system, allowing you to pinpoint failures and performance issues.</li>
                    <li><a href='https://opentelemetry.io/docs/concepts/data-sources/#metrics' target='_blank' rel='noopener noreferrer'><strong>Metrics</strong></a> provide quantitative information about processes running inside the system, including counters, gauges, and histograms.</li>
                    <li><a href='https://en.wikipedia.org/wiki/Log_file' target='_blank' rel='noopener noreferrer'><strong>Logging</strong></a> provides insight into application-specific messages emitted by processes.</li>
                  </ul>
                  <p>These verticals are tightly interconnected. <strong>Metrics</strong> can be used to pinpoint, for example, a subset of misbehaving <strong>traces</strong>. <strong>Logs</strong> associated with those traces could help to find the root cause of this behavior. And then new <strong>metrics</strong> can be configured, based on this discovery, to catch this issue earlier next time. Other verticals exist (continuous profiling, production debugging, etc.), however traces, metrics, and logs are the three most well adopted across the industry.</p>
                  <p>- <a href='https://opentelemetry.io/about/#what-is-observability' target='_blank' rel='noopener noreferrer'>OpenTelemetry</a></p>
                </blockquote>

                <h2>Architecture</h2>
                <p>Apart from the previously mentioned components of the solution, which are built into Hive<sup>io</sup> specialized containers, OpenTelemetry provides a Collector that receives data from the traces and metrics generated and export to your choice of supporting services such as <a href='https://zipkin.io/' target='_blank' rel='noopener noreferrer'>Zipkin</a>, <a href='https://prometheus.io/' target='_blank' rel='noopener noreferrer'>Prometheus</a>, and <a href='https://opentelemetry.io/registry/?s=exporter' target='_blank' rel='noopener noreferrer'>more</a>.</p>
                <blockquote>
                  <p>The Collector provides a single binary and two deployment methods:</p>
                  <ul>
                    <li>An agent running with the application or on the same host as the application (e.g. binary, sidecar, or daemonset).</li>
                    <li>A gateway running as a standalone service (e.g. container or deployment) typically per cluster, datacenter or region.</li>
                  </ul>
                  <p>- <a href='https://opentelemetry.io/docs/collector/getting-started/' target='_blank' rel='noopener noreferrer'>OpenTelemetry</a></p>
                </blockquote>
                <p>Once your deployment method is defined, the Collector needs to be <a href='https://opentelemetry.io/docs/collector/configuration/' target='_blank' rel='noopener noreferrer'>configured</a> to integrate with the supporting services previously mentioned. Check out the examples in the next section to get an idea on basic configurations.</p>
              </section>
            </div>
          </Container>
        </article>

        <NextPageHero toLeft='/infrastructure' toRight='/start' />
      </>
    )
  }
}
