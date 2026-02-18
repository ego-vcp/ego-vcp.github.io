'use client';

import clsx from 'clsx';
import Head from 'next/head';
import React from 'react';
import '@/lib/env';

import useDarkMode from '@/lib/storage';

import Figure from '@/components/Figure';
import ArrowLink from '@/components/links/ArrowLink';
import ExternalSwitch from '@/components/Switch';

import BlackBirdGif from '~/images/blackbird_caption.gif';
import EuRoCGif from '~/images/euroc_caption.gif';
import PegasusGif from '~/images/pegasus_caption.gif';
import SystemFig from '~/images/system_whitebg.png';


export default function HomePage() {
  const [mode, toggleMode] = useDarkMode();
  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const bgColor = mode === 'dark' ? 'bg-dark' : 'bg-white';
  const maskColor = mode === 'dark' ? 'bg-dark/70' : 'bg-white/70';
  const secondaryBgColor = mode === 'dark' ? 'bg-neutral-700' : 'bg-gray-100';
  const cardBgColor = 'bg-neutral-900';
  const cardBorderColor = 'border-sky-500/40';
  const questionTextColor = 'text-sky-300';
  const answerTextColor = 'text-white';
  const qaTextSize = 'text-sm leading-relaxed';
  const qaHintColor = mode === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const hlTextColor = mode === "dark" ? "text-primary-500" : "text-primary-600";
  const linkIconClass = 'h-6 w-6 shrink-0';

  const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <main>
      <Head>
        <meta name="google-site-verification" content="wORtJ7fq4X_rDll9Ym7DJ4lHQvSwbb87d_dflv28rN8" />
      </Head>
      <section className={
        clsx(bgColor, textColor,
          "relative flex items-center justify-center h-screen overflow-hidden"
        )
      }>
        <div className='absolute top-6 right-4 z-20'>
          <span>Light Mode </span>
          <ExternalSwitch state={mode === "light"} switch_state={toggleMode} />
        </div>
        <div className='layout z-20 relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='mt-4 text-6xl'>
            <span className='text-sky-300'>Ego-VCP:</span>
          </h1>
          <h1 className='mt-4 text-5xl'>
            <span className='text-sky-300'>Ego</span>-
            <span className='text-sky-300'>V</span>ision World Model for Humanoid <span className='text-sky-300'>C</span>ontact <span className='text-sky-300'>P</span>lanning
          </h1>
          <div className='container py-6'>
            <span className='text-xl font-semibold'>
              <a href="https://66lau.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">Hang Liu</a><span className="align-super text-xs leading-none">2</span>, 
              <a href="https://www.linkedin.com/in/yuman-gao-0662482a6/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors"> Yuman Gao</a><span className="align-super text-xs leading-none">1</span>, 
              <a href="https://www.linkedin.com/in/sangli-teng-474121135/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors"> Sangli Teng</a><span className="align-super text-xs leading-none">1</span>,
              <a href="https://chiyufeng.me/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors"> Yufeng Chi</a><span className="align-super text-xs leading-none">1</span>, 
              <a href="https://people.eecs.berkeley.edu/~ysshao/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors"> Yakun Sophia Shao</a><span className="align-super text-xs leading-none">1</span>,
              <a href="https://zyliatzju.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors"> Zhongyu Li</a><span className="align-super text-xs leading-none">3</span>,
              <a href="https://robotics.umich.edu/people/faculty/maani-ghaffari/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors"> Maani Ghaffari</a><span className="align-super text-xs leading-none">2</span> and 
              <a href="https://hybrid-robotics.berkeley.edu/koushil/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors"> Koushil Sreenath</a><span className="align-super text-xs leading-none">1</span>
              <br />
            </span>
            <span className='text-xl'>
              UC Berkeley, UM Ann Arbor, CUHK
            </span>
          </div>
          <div className="container flex flex-row items-center space-x-8 justify-center text-xl">
            {/* <ArrowLink className='mt-6' href='https://github.com/Air-IO/Air-IO' variant={mode} size='large'>
              GitHub Repo
            </ArrowLink> */}
            <ArrowLink
              className='mt-6'
              href='http://arxiv.org/abs/2510.11682'
              variant={mode}
              size='large'
              icon={
                <img
                  src='/logos/arxiv.svg'
                  alt='arXiv logo'
                  className={linkIconClass}
                  loading='lazy'
                />
              }
            >
              arXiv Page
            </ArrowLink>
            <ArrowLink
              className='mt-6'
              href='https://www.youtube.com/watch?v=NlTSjLGJx1U&t=1s'
              variant={mode}
              size='large'
              icon={
                <img
                  src='/logos/youtube.svg'
                  alt='YouTube logo'
                  className={linkIconClass}
                  loading='lazy'
                />
              }
            >
              Video Link
            </ArrowLink>
            <ArrowLink
              className='mt-6'
              href='https://github.com/HybridRobotics/Ego-VCP'
              variant={mode}
              size='large'
              icon={
                <img
                  src='/logos/github.svg'
                  alt='GitHub logo'
                  className={linkIconClass}
                  loading='lazy'
                />
              }
            >
              Code Repo
            </ArrowLink>

          </div>
        </div>
        <div className={clsx("absolute w-auto min-w-full min-h-full max-w-none z-10 backdrop-blur-sm", maskColor)} />
        <div className="absolute bottom-4 left-4 z-20">
          <p><span className="align-super text-xs leading-none">1</span> University of California, Berkeley</p>
          <p><span className="align-super text-xs leading-none">2</span> University of Michigan, Ann Arbor</p>
          <p><span className="align-super text-xs leading-none">3</span> Chinese University of Hong Kong</p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute w-auto min-w-full min-h-full max-w-none z-0"
        >
          <source
            src={`${BASE}/video/cover.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
            {/* Video Section - Left */}
            <div className='order-2 lg:order-1'>
              <h2 className='text-center pb-4'>Video</h2>
              <p className='text-center text-base mb-4 text-gray-600 dark:text-gray-400'>🔊 Sound on (recommended)</p>
              <div className="w-full aspect-video z-0 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/NlTSjLGJx1U"
                  title="Ego-Vision World Model for Humanoid Contact Planning"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Wall Contact</p> */}
            </div>
            
            {/* Abstract Section - Right */}
            <div className='order-1 lg:order-2'>
              <h2 className='text-center pb-4'>Abstract</h2>
              <p className='text-pretty'>
                Enabling humanoid robots to exploit physical contact, rather than simply avoid collisions, is crucial for autonomy in unstructured environments. Traditional optimization-based planners struggle with contact complexity, while on-policy reinforcement learning (RL) is sample-inefficient and has limited multi-task ability. We propose a framework combining a learned world model with sampling-based Model Predictive Control (MPC), trained on a demonstration-free offline dataset to predict future outcomes in a compressed latent space. To address sparse contact rewards and sensor noise, the MPC uses a learned surrogate value function for dense, robust planning. Our single, scalable model supports contact-aware tasks, including wall support after perturbation, blocking incoming objects, and traversing height-limited arches, with improved data efficiency and multi-task capability over on-policy RL. Deployed on a physical humanoid, our system achieves robust, real-time contact planning from proprioception and ego-centric depth images.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Highlights</h2>
          <p className='py-4 text-xl'>
            Our world model and sampling-based MPC enables real-time visual contact planning for diverse object interactions in real-world scenarios, with only <span className="text-primary-500">ego-centric depth camera</span> and proprioception.
          </p>
          
          {/* 3x3 Video Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
            {/* Row 1 */}
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full aspect-video z-0 rounded-lg">
                <source
                  src={`${BASE}/video/single_highlights/wall-1.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Blackbird Dataset</p> */}
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full aspect-video z-0 rounded-lg">
                <source
                  src={`${BASE}/video/single_highlights/wall-2.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>AirIO Introduction</p> */}
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full aspect-video z-0 rounded-lg">
                <source
                  src={`${BASE}/video/single_highlights/wall-3.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Hero Video</p> */}
            </div>
            
            {/* Row 2 */}
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full aspect-video z-0 rounded-lg">
                <source
                  src={`${BASE}/video/single_highlights/ball-1.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Tunnel Navigation</p> */}
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full aspect-video z-0 rounded-lg">
                <source
                  src={`${BASE}/video/single_highlights/ball-2.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Block Ball Task</p> */}
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full aspect-video z-0 rounded-lg">
                <source
                  src={`${BASE}/video/single_highlights/ball-3.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Wall Contact</p> */}
            </div>
            
            {/* Row 3 */}
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full aspect-video z-0 rounded-lg">
                <source
                  src={`${BASE}/video/single_highlights/tunnel-1.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>System Insights</p> */}
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full aspect-video z-0 rounded-lg">
                <source
                  src={`${BASE}/video/single_highlights/tunnel-2.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Performance Demo</p> */}
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full aspect-video z-0 rounded-lg">
                <source
                  src={`${BASE}/video/single_highlights/tunnel-3.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Method Overview</p> */}
            </div>
          </div>

        </div>
      </section>

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Methods</h2>
          <p className='py-4 text-xl'>
            {/* Without external sensors or control information, AirIO achieves <span className='text-primary-500'>up to a 86.6% performance boost</span> over SOTA methods */}
          </p>
          <video  controls  className="mx-auto z-0 rounded-lg">
            <source
              src={`${BASE}/video/method-compressed.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

        </div>
      </section>

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Multi-Task</h2>
          <p className="py-4 text-xl">
          Multi-task performance and latent space visualization. (a) A joint model matches single-task performance. (b-c) t-SNE shows clear task separation: latent <code>h_t</code> captures evolving dynamics, while latent <code>z_t</code> encodes compact observations.
          </p>
          
          {/* Side-by-side layout for video and figure */}
          <div className='grid grid-cols-1 lg:grid-cols-8 gap-8 mt-8 items-center'>
            {/* Video Section - Left */}
            <div className='order-2 lg:order-1 lg:col-span-3'>
              <video autoPlay muted controls loop className="w-full z-0 rounded-lg">
                <source
                  src={`${BASE}/video/multi-task/multi_task_compressed.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Multi-task Performance</p> */}
            </div>
            
            {/* Figure Section - Right */}
            <div className='order-1 lg:order-2 lg:col-span-5'>
              <div className='bg-white rounded-lg p-4'>
                <img 
                  src={`${BASE}/images/fig_multi.jpg`}
                  alt="Multi-task Architecture Figure"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              {/* <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Multi-task Architecture</p> */}
            </div>
          </div>

        </div>
      </section>



      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Planning Visualization</h2>
          <p className='py-4 text-xl'>
             We take use of <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Blender</a> to visualize the planning process.
          </p>
          
          {/* Three videos in a row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full z-0 rounded-lg">
                <source
                  src={`${BASE}/video/traj_vis/blender_tunnel_w_comment.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Task 1</p>
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full z-0 rounded-lg">
                <source
                  src={`${BASE}/video/traj_vis/blender_blockball_w_comment.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Task 2</p>
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full z-0 rounded-lg">
                <source
                  src={`${BASE}/video/traj_vis/blender_wall_w_comment.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Task 3</p>
            </div>
          </div>

        </div>
      </section>

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Reviewer Q&A</h2>
          <p className={clsx('mt-2 text-sm italic', qaHintColor)}>
            You might also ask questions like these:
          </p>
          <div className={clsx('mt-6 rounded-lg border p-6', cardBgColor, cardBorderColor)}>
            <div className='space-y-8'>
              <div className='space-y-2'>
                <h3 className={clsx('text-lg font-semibold', questionTextColor)}>Question</h3>
                <p className={clsx(qaTextSize, questionTextColor)}>
                  Discussion on computational cost and inference latency for onboard versus offboard deployment would help.
                </p>
                <h3 className={clsx('pt-1 text-lg font-semibold', answerTextColor)}>Answer</h3>
                <p className={clsx(qaTextSize, answerTextColor)}>
                  Our inference deployment runs on a laptop equipped with an NVIDIA RTX 2060. The high-level vision-based MPC plans
                  at 25 Hz, and most of the runtime is spent on world-model inference. We have optimized the inference speed in our
                  code; see the implementation details at{' '}
                  <a
                    href="https://github.com/HybridRobotics/Ego-VCP/blob/main/ego_vcp/scripts/play_wm.py"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    GitHub: play_wm.py
                  </a>
                  .
                </p>
              </div>

              <div className='space-y-2'>
                <h3 className={clsx('text-lg font-semibold', questionTextColor)}>Question</h3>
                <p className={clsx(qaTextSize, questionTextColor)}>
                  Possibly restricted generalization due to offline dataset from random actions; additional discussion or validation under sensory noise or unseen dynamics would help.
                </p>
                <h3 className={clsx('pt-1 text-lg font-semibold', answerTextColor)}>Answer</h3>
                <p className={clsx(qaTextSize, answerTextColor)}>
                  We demonstrate that our method achieves stable contact planning using only noisy onboard camera observations, enabled
                  by carefully designed domain randomization in simulation (see{' '}
                  <a
                    href="https://github.com/HybridRobotics/Ego-VCP/blob/5f2f2a639793d00310b073906a91bfed5d9fe557/ego_vcp/envs/g1/g1_wall_env.py#L690"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    g1_wall_env.py#L690
                  </a>
                  ). Our experiments also show nontrivial generalization to out-of-distribution scenarios for example, the robot can
                  block an unseen flying object (e.g., a box) and remain stable while a human passes through the scene.
                </p>
              </div>

              <div className='space-y-2'>
                <h3 className={clsx('text-lg font-semibold', questionTextColor)}>Question</h3>
                <p className={clsx(qaTextSize, questionTextColor)}>
                  Additional explanation of how the world model and MPC collaborate would be helpful
                </p>
                <h3 className={clsx('pt-1 text-lg font-semibold', answerTextColor)}>Answer</h3>
                <p className={clsx(qaTextSize, answerTextColor)}>
                  Our method uses a simple division of labor between the learned world model and MPC. At each timestep, we encode the current depth image and proprioception into a compact internal state. MPC then samples many candidate high-level action sequences and “imagines” their outcomes by rolling them forward through the world model in this latent space (without predicting full images). For each candidate, the world model provides a fast estimate of how good and safe the future will be, which MPC uses to score and refine the candidates (e.g., via CEM) and select the best sequence. Finally, we execute only the first action and repeat this loop at the next timestep, enabling real-time, feedback-driven planning.
                </p>
              </div>

              <div className='space-y-2'>
                <h3 className={clsx('text-lg font-semibold', questionTextColor)}>Question</h3>
                <p className={clsx(qaTextSize, questionTextColor)}>
                  In Figure 5, comparing sample efficiency, why does PPO consistently appear below zero? Why do “Support the Wall” and “Block the Ball” suddenly rise to a “comparable level” after 1 million steps, while “Traverse the Arch” appears more stable? Additionally, the coordinate values across the three plots differ significantly in magnitude.
                </p>
                <h3 className={clsx('pt-1 text-lg font-semibold', answerTextColor)}>Answer</h3>
                <p className={clsx(qaTextSize, answerTextColor)}>
                After 1 million steps, we rescaled the x-axis to show how much data PPO actually needs to match our method. As a result, PPO appears to have an abrupt jump in the plot. In practice, our method already achieves strong performance with only 0.2 million steps of data. As discussed in Section IV, different tasks use different objective functions (reward definitions), which highlights the multi-task advantage of our method. As a result, the value scale can differ across tasks.                </p>
              </div>

              <div className='space-y-2'>
                <h3 className={clsx('text-lg font-semibold', questionTextColor)}>Question</h3>
                <p className={clsx(qaTextSize, questionTextColor)}>
                  The fact that a longer planning horizon (Table I) leads to less good performance would suggest that the world model (either the dynamics or the reward model) is not predicting longer horizon well while Fig 7 claims the opposite. Do you know what is the reason for these seemingly opposing results?
                </p>
                <h3 className={clsx('pt-1 text-lg font-semibold', answerTextColor)}>Answer</h3>
                <p className={clsx(qaTextSize, answerTextColor)}>
                  In Section IV.D (Model Interpretation and Visualization on Prediction), our goal is to answer the following question: Does our model exhibit physical intuition, and does it efficiently extract a compact representation that retains only task-relevant information? The plotted trajectories show that the world model can capture the ball's parabolic motion while filtering out irrelevant noise, suggesting that the learned dynamics have not collapsed.
                </p>
                <p className={clsx(qaTextSize, answerTextColor)}>
                  At the same time, no dynamics model is perfect. Moreover, in MPC it is not the case that a longer horizon is always better. Even with an analytical dynamics model, we typically do not use an excessively long horizon: increasing the horizon imposes a heavier optimization convergence burden for sampling-based MPC, and it can also amplify accumulated model errors. These two points are therefore not contradictory. The key takeaway from Table 1 is that multi-step prediction improves performance over greedy searching (horizon =1). The optimal horizon length is instead a trade-off among bias and variance, optimization landscape, and real-time constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Acknowledgments</h2>
          <div className='py-4 text-xl space-y-4'>
            <p>
              We would like to thank Jiaze Cai and Yen-Jen Wang for their help in experiments. We are also grateful to Bike Zhang, Fangchen Liu, Chaoyi Pan, Junfeng Long, and Yiyang Shao for their valuable discussions.
            </p>
            <p>
              This project website is built with Next.js, adapted from the <a href="https://air-io.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">AIRIO</a> website, and incorporates trajectory visualization methods inspired by <a href="https://lecar-lab.github.io/dial-mpc/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">DIAL-MPC</a>.
            </p>
          </div>
        </div>
      </section>

      {/* <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Compare With Other Methods</h2>
          <p className='py-4 text-xl'>
            Without external sensors or control information, AirIO achieves <span className='text-primary-500'>up to a 86.6% performance boost</span> over SOTA methods
          </p>
        </div>
      </section> */}


    </main >
  );
}
