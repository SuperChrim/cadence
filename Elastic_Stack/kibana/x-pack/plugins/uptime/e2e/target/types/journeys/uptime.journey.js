"use strict";
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.byTestId = void 0;

const synthetics_1 = require("@elastic/synthetics");

const byTestId = testId => {
  return `[data-test-subj=${testId}]`;
};

exports.byTestId = byTestId;
synthetics_1.journey('uptime', ({
  page,
  params
}) => {
  async function waitForLoadingToFinish() {
    let isLoadingVisible = true;

    while (isLoadingVisible) {
      const loading = await page.$(exports.byTestId('kbnLoadingMessage'));
      isLoadingVisible = loading !== null;
      await page.waitForTimeout(5 * 1000);
    }
  }

  synthetics_1.step('Go to Kibana', async () => {
    await page.goto(`${params.kibanaUrl}/app/uptime?dateRangeStart=now-5y&dateRangeEnd=now`, {
      waitUntil: 'networkidle'
    });
  });
  synthetics_1.step('Login into kibana', async () => {
    await page.fill('[data-test-subj=loginUsername]', 'elastic', {
      timeout: 60 * 1000
    });
    await page.fill('[data-test-subj=loginPassword]', 'changeme');
    await page.click('[data-test-subj=loginSubmit]');
  });
  synthetics_1.step('dismiss synthetics notice', async () => {
    await waitForLoadingToFinish();
    await page.click('[data-test-subj=uptimeDismissSyntheticsCallout]', {
      timeout: 60 * 1000
    });
  });
  synthetics_1.step('change uptime index pattern', async () => {
    if (await page.$(exports.byTestId('toastCloseButton'))) {
      await page.click(exports.byTestId('toastCloseButton'));
    }

    await page.click(exports.byTestId('settings-page-link'));
    await page.waitForTimeout(5 * 1000);
    const currentIndex = await page.inputValue(exports.byTestId('heartbeat-indices-input-loaded'));

    if (currentIndex !== 'heartbeat-*') {
      await page.fill(exports.byTestId('heartbeat-indices-input-loaded'), 'heartbeat-*');
      await page.click(exports.byTestId('apply-settings-button'));
    }

    await page.goBack();
  });
  synthetics_1.step('Check if there is table data', async () => {
    await page.click('[data-test-subj=uptimeOverviewPage]');
    await page.click('div.euiBasicTable', {
      timeout: 60 * 1000
    });
  });
  synthetics_1.step('Click on my monitor', async () => {
    await page.click('[data-test-subj=monitor-page-link-0001-up]');
  });
});