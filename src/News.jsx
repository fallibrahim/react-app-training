import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Technology from './Technology';
import Sports from './Sports';
import IntroductionH from './IntroductionH';

function News() {
  return (
    <Routes>
      <Route path="/news/technology" element={<Technology />} />
      <Route path="/news/sports" element={<Sports />} />
      <Route index element={<IntroductionH />} />
    </Routes>
  );
}

export default News;