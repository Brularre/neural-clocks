'use client';

// Provider
import AppProvider from './providers/AppProvider';
import FormProvider from './providers/FormProvider';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PomodoroTimer from './components/PomodoroTimer/Pomodoro';
import TimerSettings from './components/TimerSettings/TimerSettings';
import TeamViewer from './components/TeamViewer/TeamViewer';

export default function Home() {
  return (
    <>
      <div className='flex px-20 lg:py-24'>
        <div className='flex flex-col lg:w-1/2 lg:justify-between'>
          <Header />
          <Footer />
        </div>
        <main className='lg:w-1/2'>
          <AppProvider>
            <PomodoroTimer />
            <FormProvider>
              <TimerSettings />
            </FormProvider>
            <TeamViewer />
          </AppProvider>
        </main>
      </div>
    </>
  );
}
