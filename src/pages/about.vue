<script setup lang="ts"></script>

<template>
  <div
    class="
      flex flex-col flex-wrap
      mb-2
      px-4
      lg:px-0
      text-elucidator-700
      dark:text-elucidator-50
    "
  >
    <div class="flex flex-row">
      <div class="basis-1/3">
        <img
          src="https://previews.aspirity.com/spirit/assets/img/img_avatar.png"
          class="w-9/12"
        />
      </div>
      <div class="basis-2/3">
        <div>
          <h1 class="font-bold text-5xl mt-10 mb-2.5">Nhơn Nguyễn</h1>
          <h3>Full Stack Laravel Developer</h3>
        </div>
        <ul class="list-nonex">
          <li>
            <span class="mr-3 font-bold opacity-40 uppercase">Email</span>
            <span>
              <a href="mailto:thanhnhon.cntt@gmail.com"
                >thanhnhon.cntt@gmail.com</a
              >
            </span>
          </li>
          <li>
            <span class="mr-3 font-bold opacity-40 uppercase">Skype</span>
            <span>
              <a href="skype:thanhnhon_cntt@hotmail.com"
                >thanhnhon_cntt@hotmail.com</a
              >
            </span>
          </li>
          <li class="social">
            <a
              href="https://github.com/thanhnhoncntt"
              target="_blank"
              rel="noopener noreferrer"
            ></a>

            <a
              href="https://www.facebook.com/nhonptit/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>

            <a
              href="https://www.linkedin.com/in/nh%C6%A1n-nguy%E1%BB%85n-97768611b/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h2>Xin chào</h2>
      <div>
        <p>
          Around 8+ years of extensive experience as a Fullstack Web Application
          Developer in System Analysis, Development, and Implementation of
          various client/server, Web-based applications.
        </p>
      </div>
    </div>

    <div>
      <h2>Resume_</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet, communication adipisicing elit, helpful
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud sence of humour ullamco laboris nisi ut
          honest ea commodo consequat. Duis aute irure dolor in
          upper-intermediate english level velit dolore eu ivivdtevoluptatem
          ontend developer.
        </p>
      </div>

      <div>
        <h3>Skill</h3>
        <div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">PHP</p>
            <p>8+ năm</p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">VueJS</p>
            <p>5+ năm</p>
          </div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">Elasticsearch</p>
            <p>5+ năm</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Học vấn</h3>
        <div>
          <div class="resume-list__block">
            <p class="resume-list__block-title">Đại học</p>
            <p>
              Học công nghệ thông tin trường Học viện Công nghệ Bưu chính Viễn
              Thông cơ sở Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>Kinh nghiệm làm việc</h2>
      <div>
        <div class="resume-list__block">
          <p class="resume-list__block-title font-bold">
            Fullstack web application developer
          </p>
          <p class="resume-list__block-date text-slate-500 dark:text-slate-400">
            Flix Viet Nam | Jun 2016 ‒ Preset
          </p>
          <div class="font-light">
            <ul>
              <li>
                Solve problems -- resolve issues thoroughly; focus on addressing
                the client's priorities first and foremost; investigate
                solutions completely through detailed research; know, understand
                and improve GTB standards; estimate tasks accurately; and
                provide clear explanations of deliverables, risks and
                assumptions.
              </li>
              <li>
                Share knowledge -- communicate clearly and concisely with
                internal and external stakeholders, mentor other developers,
                tailor communication to the audience, and proactively provides
                timely and complete project statuses
              </li>
              <li>Experience working with Vuejs</li>
              <li>
                Experience working with Elasticsearch. Experienced in building a
                system of more than 1 billion documents.
              </li>
              <li>Experience in Vultr , Digitalocean</li>
            </ul>
          </div>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">
            Junior Fullstack web application developer
          </p>
          <p class="resume-list__block-date">
            Kantek Inc | May 2015 ‒ Jun 2016
          </p>
          <div>
            <ul>
              <li>
                Development and maintenance for various modules of the client’s
              </li>
              <li>
                Background in MVC style frameworks (eg Laravel, Symphony,
                CodeIgniter)
              </li>
              <li>Experience working in a Unix/Linux environment, & GitHub</li>
              <li>Engage with team</li>
              <li>
                Capable of planning and managing multiple initiatives with
                minimal oversight
              </li>
            </ul>
          </div>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">PHP Web Developer</p>
          <p class="resume-list__block-date">MaxLink | Apr 2014 ‒ May 2015</p>
          <p>Development and maintenance for various modules of the company</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h2 {
  @apply font-medium text-4xl mt-0 mb-10;
  font-family: 'Roboto Mono', monospace;
  line-height: 42px;
}
.resume-list__block-title {
  @apply font-bold leading-5 m-0 pb-1 uppercase;
  color: rgba(109, 86, 193, 1);
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
}
.resume-list__block-date {
  @apply leading-5 m-0 pb-2.5;
  font-size: 14px;
  color: rgba(153, 153, 153, 1);
}
</style>