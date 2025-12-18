import React from 'react'
import Accordion from '@/app/components/Accordion';
import ReusableCard from './ReusableCard';

const QandA = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 mt-12">Q&A</h1>
      
      <Accordion
        question="Is MyFitnessPal a free calorie tracker app?" 
        answer="Yes! If you're looking for a free calorie counter app, you're in the right place. Simply sign up for your free account here and start tracking your food.

        The MyFitnessPal app does a lot more than track calories in foods. You can also track macros, vitamins, and other micronutrients and see how everything you eat supports your goals.

        Want to level up your goals? Upgrade to Premium! Unlock MyFitnessPal's best tools (like Barcode Scan, Intermittent Fasting, and Custom Macro Goals).

        If you've never upgraded to MyFitnessPal Premium or never started a Premium trial before, you are eligible for a 1-month free trial. Start your free trial now.

        The first Premium subscription charge on your credit card will be after the trial. Once the trial ends, your subscription will auto-renew unless you cancel. If you purchased a monthly subscription, you will be charged every month. If you purchased an annual subscription, you will be charged every year.

        You may cancel your recurring subscription at any time. Cancel at least 24 hours before the next renewal date to avoid being charged for the upcoming billing cycle. When you cancel, you are canceling the next billing charge—Premium features will remain available to you until the end of your current paid subscription period, regardless of when you cancel the automatic renewal." 
      />
      
      <Accordion 
        question="How to track calories with a calorie counter app like MyFitnessPal?" 
        answer="If you want to know how many calories are in the foods you eat, or how many calories you eat each day, the MyFitnessPal app makes it easy.

        Sign up for a free account and download the app. Then you can quickly look up calories and nutrients for any food AND track it all to see the impact of food on your health and fitness goals.

        Free members can do a simple food search from their app's home screen. Premium members have access to other time-saving tools that allow you to scan a barcode or individual foods with your phone's camera to instantly identify the best match. Learn more about Premium and try it free.

        However you choose to look up calories for foods, MyFitnessPal gives you access to over 18 million global foods in one of the world's largest food databases — including fresh foods, packaged goods, restaurant items, and even foods and recipes you save yourself." 
      />
      
      <Accordion 
        question="What nutrition data can I track besides calories?" 
        answer="MyFitnessPal isn't just a calorie tracking app. We're a macro tracking app, a micronutrient tracking app, and a water tracking app — all in one! (Not to mention the other goals you can track, including weight, exercise, steps, and intermittent fasting.)

        Simply log the foods you eat using one of our easy food tracking tools, and we'll show you a complete nutritional breakdown for each food, meal, day, and even week. Any way you want to look at your data, you'll gain a better understanding of your personal nutrition so you can make smart choices that align with your weight, health, and fitness goals." 
      />
      
      <Accordion 
        question="Does MyFitnessPal use a BMI calculator or BMR calculator to set goals?" 
        answer="Yes, MyFitnessPal uses a BMR calculator to help you set calorie goals. During signup, you'll be asked questions about your height, weight, age, and sex to estimate your BMR (basal metabolic rate). You can also estimate your own BMR with our BMR calculator.

        The equation used to calculate BMR is called the Mifflin St. Jeor equation* and it takes into account your typical activity level during the day to calculate your daily calorie needs. Depending on your weight goals, we either add or subtract calories from your daily calorie needs (500 calories per pound of weight change per week desired).

        To help you set safe weight goals during signup, we use a BMI calculator. BMI is based on the ratio of your weight to your height, and we don't allow you to set weight goals below a certain ratio.

        *The Mifflin St. Jeor equation is considered to be the best estimation of calorie needs compared to other equations, being able to get within 10% of your actual energy needs on average." 
      />
       
      <Accordion 
        question="Can I track weight, workouts, water or intermittent fasting?" 
        answer="Yes! The best thing about MyFitnessPal is that it's an all-in-one app. You don't need a separate intermittent fasting app, or different apps for water tracking, weight tracking, or fitness tracking.

        All MyFitnessPal members can track their weight goals, exercise, and water intake alongside calories and nutrition. MyFitnessPal Premium members have many additional features, including our NEW Intermittent Fasting Tracker. Learn more about Premium and try it free.

        If you do use other apps and fitness devices as part of your overall health and wellness goals, more than 35 apps and fitness devices connect to MyFitnessPal. Automatically sync your steps, calorie burn, weight, and even sleep! Connect to Apple Watch, Fitbit, Garmin, Samsung Health, Google Fit, Health Connect, smart scales, and many more." 
      />
      <div>
            <h1 className=' text-3xl md:text-5xl text-[#212121] mt-28 font-semibold text-center '>
                From our experts
            </h1>


    <div className="p-10 grid grid-cols-1 gap-8">
      
      {/* First instance of the card (matching your original image) */}
      <ReusableCard
        imageUrl="/Essential-Guide-to-Food-Logging-featured.webp"
        title="Essential Guide to Food Logging"
        bodyText="Whether your goal is to lose weight, build strength, perform at your peak or improve your overall health, keeping an accurate food journal of what you eat and drink is essential. It provides valuable insight into your nutrition habits, so you can see trends and make adjustments as needed."
        linkHref="/dummy-page" // Link to the dummy page we made earlier
        linkText="Read more on MyFitnessPal blog"
      />

      {/* Second instance of the card with totally different content */}
      <ReusableCard
        imageUrl="/ThingsYoullLearn.webp"
        title="11 Thing You&apos;ll Lear Using MyFitnessPal"
        bodyText="There&apos;s no easier way to track your food, activity, steps, water, weight and measurements than MyFitnessPal. That&apos;s why more than 200 million people use the app to to achieve their health and fitness goals"
        linkHref="/recipes/breakfast"
        linkText="Read more on MyFitnessPal blog"
      />
      
      <ReusableCard
        imageUrl="/Essential-Guide-to-Healthy-Eating-2.webp"
        title="Essential Guide To Healthy Eating"
        bodyText="When you start learning more about nutrition, it can seem overwhelming. For people who are interested, there is definitely a lot to learn and explore, but, in the end, basic nutrition is quite simple. It&apos;s so simple, in fact, that we know you can eat better by focusing on these eight things."
        linkHref="/recipes/breakfast"
        linkText="Read more on MyFitnessPal blog"
      />
      
    </div>


            <h1 className='text-[12px] text-[#6c6c70] mb-16 '>
              <p className='text-bold mb-4 text-sm pl-1'> 
                About MyFitnessPal
              </p>
              <p className='pl-1'>
                MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. Members use it as a calories tracker and calorie counter to log their foods, and take advantage of the app&apos;s food database that contains over 20 million foods. It&apos;s not just a free calorie counter app — it&apos;s also the best calorie counter app for people who are looking to take back control of their health and fitness.
              </p>
              
            </h1>
          </div>
    </div>
  )
}

export default QandA
