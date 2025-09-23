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
  const hlTextColor = mode === "dark" ? "text-primary-500" : "text-primary-600";

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
          <h1 className='mt-4 text-5xl'>
          Ego-Vision World Model for Humanoid Contact Planning
          </h1>
          <div className='container py-6'>
            <span className='text-lg font-semibold'>
              Hang Liu<span className="align-super text-xs leading-none">2</span>, 
              Yuman Gao<span className="align-super text-xs leading-none">1</span>, 
              Sangli Teng<span className="align-super text-xs leading-none">1</span>,
              Yufeng Chi<span className="align-super text-xs leading-none">1</span>, 
              Sophia Shao<span className="align-super text-xs leading-none">1</span>,
              Zhongyu Li<span className="align-super text-xs leading-none">1</span>,
              Maani Ghaffari<span className="align-super text-xs leading-none">2</span> and 
              Koushil Sreenath<span className="align-super text-xs leading-none">1</span>
              <br />
            </span>
            <span className='text-lg'>
              UC Berkeley, U-M Ann Arbor
            </span>
          </div>
          <div className="container flex flex-row items-center space-x-8 justify-center text-lg">
            <ArrowLink className='mt-6' href='https://github.com/Air-IO/Air-IO' variant={mode} size='large'>
              GitHub Repo
            </ArrowLink>
            <ArrowLink className='mt-6' href='https://arxiv.org/abs/2501.15659' variant={mode} size='large'>
              arXiv Page
            </ArrowLink>
            <ArrowLink className='mt-6' href='https://youtu.be/342ZfxoL7_0' variant={mode} size='large'>
              Video Link
            </ArrowLink>
          </div>
        </div>
        <div className={clsx("absolute w-auto min-w-full min-h-full max-w-none z-10 backdrop-blur-sm", maskColor)} />
        <div className="absolute bottom-4 left-4 z-20">
          <p><span className="align-super text-xs leading-none">1</span> UC Berkeley, CA, USA</p>
          <p><span className="align-super text-xs leading-none">2</span> University of Michigan, Ann Arbor, MI, USA</p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute w-auto min-w-full min-h-full max-w-none z-0"
        >
          <source
            src="/video/cover.mp4"
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
              <video
                autoPlay
                muted
                controls
                className="w-full z-0 rounded-lg"
              >
                <source
                  src="/video/1_AirIO_introduction.mov"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
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

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Methods</h2>
          <p className='py-4 text-lg'>
            Without external sensors or control information, AirIO achieves <span className='text-primary-500'>up to a 86.6% performance boost</span> over SOTA methods
          </p>
          <video autoPlay muted controls loop className="mx-auto z-0 rounded-lg">
            <source
              src="/video/blackbird_for_web.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

        </div>
      </section>

      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Single-Task Highlights</h2>
          <p className='py-4 text-lg'>
            Without external sensors or control information, AirIO achieves <span className='text-primary-500'>up to a 86.6% performance boost</span> over SOTA methods
          </p>
          <video autoPlay muted controls loop className="mx-auto z-0 rounded-lg">
            <source
              src="/video/blackbird_for_web.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

        </div>
      </section>

      <section className={clsx(secondaryBgColor, textColor)}>
        <div className='layout py-12'>
          <h2>One model for ALL</h2>
          <p className='py-4 text-lg'>
            Without external sensors or control information, AirIO achieves <span className='text-primary-500'>up to a 86.6% performance boost</span> over SOTA methods
          </p>
          <video autoPlay muted controls loop className="mx-auto z-0 rounded-lg">
            <source
              src="/video/blackbird_for_web.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

        </div>
      </section>



      <section className={clsx(bgColor, textColor)}>
        <div className='layout py-12'>
          <h2>Trajectory Visualization</h2>
          <p className='py-4 text-lg'>
            Without external sensors or control information, AirIO achieves <span className='text-primary-500'>up to a 86.6% performance boost</span> over SOTA methods
          </p>
          
          {/* Three videos in a row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full z-0 rounded-lg">
                <source
                  src="/video/traj_vis/blender_tunnel_w_comment.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Task 1</p>
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full z-0 rounded-lg">
                <source
                  src="/video/traj_vis/blender_blockball_w_comment.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <p className='text-center text-sm mt-2 text-gray-600 dark:text-gray-400'>Task 2</p>
            </div>
            
            <div className='flex flex-col'>
              <video autoPlay muted controls loop className="w-full z-0 rounded-lg">
                <source
                  src="/video/traj_vis/blender_wall_w_comment.mp4"
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
          <h2>Compare With Other Methods</h2>
          <p className='py-4 text-lg'>
            Without external sensors or control information, AirIO achieves <span className='text-primary-500'>up to a 86.6% performance boost</span> over SOTA methods
          </p>


        </div>
      </section>


    </main >
  );
}
