<script setup>
import { courseData } from "../generated/course-content.mjs"
import TeachingTeam from "./TeachingTeam.vue"
import CourseMeta from "./CourseMeta.vue"

const navItems = [
  { href: "#course-info", label: "课程信息" },
  { href: "#teaching-team", label: "任课教师与助教" },
  { href: "#course-materials", label: "课程资料" },
  { href: "#outline-zh", label: "内容简介" },
]
</script>

<template>
  <div class="syllabus-page">
    <aside class="syllabus-sidebar">
      <h1>{{ courseData.course.titleZh }}</h1>
      <p class="syllabus-subtitle">{{ courseData.course.titleEn }}</p>

      <nav class="syllabus-nav">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
    </aside>

    <main class="syllabus-main">
      <section id="course-info" class="syllabus-section">
        <h2>课程信息</h2>
        <CourseMeta />
      </section>

      <TeachingTeam />

      <section id="course-materials" class="syllabus-section">
        <h2>课程资料</h2>
        <p>后续将持续更新</p>
      </section>

      <section id="outline-zh" class="syllabus-section">
        <h2>内容简介</h2>

        <p>
          本课程是一门面向全校本科学生的通修课程，讲授人工智能的基本原理、核心技术与应用场景，帮助学生建立对人工智能领域的初步认知与实践能力。课程以理论与实践相结合的方式，通过深入浅出的教学内容与丰富的实验环节，让学生掌握主流机器学习方法。
        </p>

        <p>
          理论课程涵盖人工智能的历史发展、核心概念及其实际应用场景。重点介绍监督学习中的经典算法（如线性回归、逻辑回归）、神经网络的基本架构与优化机制（如前向传播、反向传播、梯度消失与爆炸），以及深度学习中的前沿模型（如图神经网络和 Transformer）、自监督学习的核心思想、强化学习的基础理论、生成式人工智能的最新进展。
        </p>

        <p>
          实践课程是本课程的重要组成部分。学生将通过 Python 编程实现理论课程中讲授的经典算法，完成实际应用任务，如图像分类、文本处理、AI-for-Science 等项目。通过实验操作，使学生不仅掌握数据处理、模型构建与优化等技能，还深入理解人工智能技术在解决实际问题时的流程与挑战。
        </p>

        <p>
          通过本课程的学习，学生将掌握人工智能领域的基础知识与实践技能，具备使用主流人工智能技术解决简单实际问题的能力，为未来深入学习或从事相关工作奠定基础。
        </p>
      </section>
    </main>
  </div>
</template>
